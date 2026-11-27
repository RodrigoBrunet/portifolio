const LISTA_EXP = typeof EXPERIENCIAS !== "undefined" ? EXPERIENCIAS : [];
const semModelos = (lista) => (lista || []).filter((item) => !item.modelo);
const LISTA_PART = semModelos(typeof PARTICIPACOES !== "undefined" ? PARTICIPACOES : []);
const LISTA_APPS = semModelos(typeof MEUS_APPS !== "undefined" ? MEUS_APPS : []);
const LISTA_CASOS = semModelos(typeof CASOS !== "undefined" ? CASOS : []);

const STATUS_APP = {
  publicado: { rotulo: "Publicado", classe: "st-publicado" },
  desenvolvimento: { rotulo: "Em desenvolvimento", classe: "st-dev" },
  "em-breve": { rotulo: "Em breve", classe: "st-breve" },
};

function lerMes(aaaamm) {
  if (!aaaamm) return null;
  const [a, m] = aaaamm.split("-").map(Number);
  return { a, m: m || 1 };
}
function mesesEntre(ini, fim) {
  const hoje = new Date();
  const f = fim || { a: hoje.getFullYear(), m: hoje.getMonth() + 1 };
  return Math.max(1, (f.a - ini.a) * 12 + (f.m - ini.m) + 1);
}
function periodoAnos(e) {
  const ini = lerMes(e.inicio);
  if (!ini) return "";
  const fim = lerMes(e.fim);
  if (fim && fim.a === ini.a) return String(ini.a);
  return `${ini.a} — ${fim ? fim.a : "atual"}`;
}
function anosExperiencia() {
  const inicios = LISTA_EXP.map((e) => lerMes(e.inicio)).filter(Boolean);
  if (!inicios.length) return 0;
  const primeiro = inicios.reduce((a, b) => (a.a * 12 + a.m <= b.a * 12 + b.m ? a : b));
  return Math.floor(mesesEntre(primeiro, null) / 12);
}

function itemTec(t) {
  return `<li>${ICONES_TEC[String(t).toLowerCase()] || ""}${esc(t)}</li>`;
}

function renderPerfil() {
  const anos = anosExperiencia();
  document.title = `${PERFIL.nome} — Portfólio`;
  document.getElementById("hero-nome").textContent = PERFIL.nome;
  renderTitulo();
  digitar(document.getElementById("hero-cargo"), PERFIL.cargos?.length ? PERFIL.cargos : [PERFIL.cargo]);
  document.getElementById("hero-bio").textContent = (PERFIL.bio || "").replace(/\{anos\}/g, anos);

  const status = document.querySelector(".status");
  if (PERFIL.status) status.textContent = PERFIL.status;
  else status.remove();

  const avatar = document.getElementById("hero-avatar");
  avatar.innerHTML = PERFIL.foto
    ? `<img src="${esc(PERFIL.foto)}" alt="Foto de ${esc(PERFIL.nome)}">`
    : `<span>${esc(iniciais(PERFIL.nome))}</span>`;

  document.getElementById("sobre-texto").innerHTML = (PERFIL.sobre || []).map((p) => `<p>${esc(p)}</p>`).join("");
  document.getElementById("habilidades").innerHTML = (PERFIL.habilidades || []).map(itemTec).join("");

  const stack = document.getElementById("hero-stack");
  if (PERFIL.stack?.length) {
    stack.innerHTML = PERFIL.stack.map(itemTec).join("");
  } else {
    stack.hidden = true;
  }

  document.getElementById("hero-redes").innerHTML = (PERFIL.redes || [])
    .map(
      (r) =>
        `<a class="icone-link" href="${esc(r.url)}" target="_blank" rel="noopener" aria-label="${esc(
          NOMES_REDES[r.tipo] || r.tipo
        )}">${ICONES[r.tipo] || ICONES.site}</a>`
    )
    .join("");

  document.getElementById("terminal-codigo").innerHTML = codigoTerminal();
}

function renderTitulo() {
  const el = document.getElementById("hero-titulo");
  const titulo = PERFIL.titulo || PERFIL.nome;
  const destaque = PERFIL.tituloDestaque;
  const pos = destaque ? titulo.indexOf(destaque) : -1;
  el.innerHTML =
    pos < 0
      ? esc(titulo)
      : esc(titulo.slice(0, pos)) +
        `<span class="texto-gradiente">${esc(destaque)}</span>` +
        esc(titulo.slice(pos + destaque.length));
}

function linkWhatsapp() {
  if (!PERFIL.whatsapp) return "";
  const mensagem = "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.";
  return `https://wa.me/${encodeURIComponent(PERFIL.whatsapp)}?text=${encodeURIComponent(mensagem)}`;
}

function aplicarLinkOrcamento(raiz) {
  const whatsapp = linkWhatsapp();
  if (!whatsapp) return;
  raiz.querySelectorAll("[data-orcamento]").forEach((a) => {
    a.href = whatsapp;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

function iniciarContatoRapido() {
  const whatsapp = linkWhatsapp();
  if (!whatsapp) return;
  aplicarLinkOrcamento(document);
  const flutuante = document.getElementById("whatsapp-flutuante");
  flutuante.href = whatsapp;
  flutuante.innerHTML = ICONES.whatsapp;
  flutuante.setAttribute("aria-label", "Conversar no WhatsApp");
  flutuante.title = "Conversar no WhatsApp";
  flutuante.hidden = false;
}

function renderServicos() {
  if (typeof SERVICOS === "undefined" || !SERVICOS.length) {
    document.getElementById("servicos").hidden = true;
    return;
  }
  document.getElementById("lista-servicos").innerHTML = SERVICOS.map(
    (servico) => `
      <article class="servico cartao revelar">
        <span class="servico-icone">${ICONES_SERVICO[servico.icone] || ICONES_SERVICO.celular}</span>
        <h3>${esc(servico.titulo)}</h3>
        <p>${esc(servico.texto)}</p>
      </article>`
  ).join("");
}

function renderProcesso() {
  if (typeof PROCESSO === "undefined" || !PROCESSO.length) {
    document.getElementById("processo").hidden = true;
    return;
  }
  document.getElementById("lista-processo").innerHTML = PROCESSO.map(
    (etapa, i) => `
      <li class="etapa cartao revelar">
        <span class="etapa-num">${String(i + 1).padStart(2, "0")}</span>
        <h3>${esc(etapa.titulo)}</h3>
        <p>${esc(etapa.texto)}</p>
      </li>`
  ).join("");
}

function iniciarBrilhoCartoes() {
  if (!matchMedia("(hover: hover)").matches) return;
  document.addEventListener("pointermove", (e) => {
    const cartao = e.target.closest?.(".cartao");
    if (!cartao) return;
    const r = cartao.getBoundingClientRect();
    cartao.style.setProperty("--x", `${e.clientX - r.left}px`);
    cartao.style.setProperty("--y", `${e.clientY - r.top}px`);
  });
}

function numerarSecoes() {
  const visiveis = [...document.querySelectorAll("section[data-numerada]")].filter((s) => !s.hidden);
  document.querySelectorAll("section[data-numerada]").forEach((secao) => {
    const i = visiveis.indexOf(secao);
    const num = i >= 0 ? String(i + 1).padStart(2, "0") + "." : "";
    secao.classList.toggle("secao-alt", i >= 0 && i % 2 === 0);
    secao.querySelectorAll(".rotulo [data-num]").forEach((n) => (n.textContent = num));
    const link = document.querySelector(`.menu a[href="#${secao.id}"]`);
    if (link) {
      link.hidden = i < 0;
      link.querySelector("[data-num]").textContent = num;
    }
  });
}

function digitar(el, textos) {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches || textos.length === 0) {
    el.textContent = textos[0] || "";
    return;
  }
  let i = 0, pos = 0, apagando = false;
  const passo = () => {
    const t = textos[i];
    pos += apagando ? -1 : 1;
    el.textContent = t.slice(0, pos);
    let espera = apagando ? 35 : 65;
    if (!apagando && pos === t.length) {
      if (textos.length === 1) return;
      apagando = true;
      espera = 2200;
    } else if (apagando && pos === 0) {
      apagando = false;
      i = (i + 1) % textos.length;
      espera = 400;
    }
    setTimeout(passo, espera);
  };
  setTimeout(passo, 500);
}

function codigoTerminal() {
  const s = (v) => `<span class="tk-s">"${esc(v)}"</span>`;
  const n = (v) => `<span class="tk-b">${esc(v)}</span>`;
  const p = (v) => `<span class="tk-p">${v}</span>`;
  const hab = PERFIL.habilidades || [];
  const stack = hab.slice(0, 4).map(s).join(", ");
  const linhas = [
    `<span class="tk-c">// configuração do desenvolvedor</span>`,
    `<span class="tk-k">const</span> <span class="tk-v">dev</span> = {`,
    PERFIL.foco ? `  ${p("foco")}: ${s(PERFIL.foco)},` : null,
    `  ${p("stack")}: [${stack}${hab.length > 4 ? ", ..." : ""}],`,
    PERFIL.localizacao ? `  ${p("local")}: ${s(PERFIL.localizacao)},` : null,
    PERFIL.abertoA?.length ? `  ${p("aberto_a")}: [${PERFIL.abertoA.map(s).join(", ")}],` : null,
    `  ${p("apps_proprios")}: ${n(LISTA_APPS.length)},`,
    `  ${p("disponivel")}: ${n(PERFIL.status ? "true" : "false")},`,
    `};`,
  ].filter((l) => l !== null);
  return linhas.map((l, i) => `<span class="ln">${i + 1}</span>${l}`).join("\n");
}

function renderCasos() {
  if (!LISTA_CASOS.length) {
    document.getElementById("cases").hidden = true;
    return;
  }
  document.getElementById("lista-casos").innerHTML = LISTA_CASOS.map((caso, i) => {
    const periodo = periodoAnos(caso);
    return `
      <article class="caso cartao revelar${i === 0 && LISTA_CASOS.length % 2 === 1 ? " caso-destaque" : ""}">
        <p class="caso-topo">
          <span class="caso-num">caso ${String(i + 1).padStart(2, "0")}</span>
          ${periodo ? `<span class="caso-periodo">${esc(periodo)}</span>` : ""}
        </p>
        <h3>${esc(caso.titulo)}</h3>
        ${caso.contexto ? `<p class="caso-contexto">${esc(caso.contexto)}</p>` : ""}
        ${caso.desafio ? `<p class="caso-desafio">${esc(caso.desafio)}</p>` : ""}
        ${caso.resultado ? `<p class="caso-resultado"><span>resultado</span>${esc(caso.resultado)}</p>` : ""}
        ${
          caso.solucao?.length
            ? `<button type="button" class="caso-abrir" data-caso="${i}" aria-haspopup="dialog">ver o que eu fiz</button>`
            : ""
        }
      </article>`;
  }).join("");
}

function abrirCaso(i) {
  const caso = LISTA_CASOS[i];
  const modal = document.getElementById("modal-caso");
  if (!caso || !modal) return;
  document.getElementById("modal-caso-conteudo").innerHTML = `
    <button type="button" class="modal-fechar" data-fechar aria-label="Fechar">${ICONES.fechar}</button>
    <p class="caso-topo"><span class="caso-num">caso ${String(i + 1).padStart(2, "0")} · o que eu fiz</span></p>
    <h3 id="modal-caso-titulo">${esc(caso.titulo)}</h3>
    <ul class="caso-lista modal-lista">${(caso.solucao || []).map((item, n) => `<li style="--i:${n}">${esc(item)}</li>`).join("")}</ul>
    ${caso.resultado ? `<p class="caso-resultado"><span>resultado</span>${esc(caso.resultado)}</p>` : ""}
    <div class="modal-acoes">
      <a class="botao" data-orcamento href="#contato">Quero algo parecido</a>
    </div>`;
  aplicarLinkOrcamento(modal);
  modal.classList.remove("fechando");
  modal.showModal();
  modal.querySelector("[data-fechar]").focus();
}

function fecharModal(modal) {
  if (!modal.open || modal.classList.contains("fechando")) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    modal.close();
    return;
  }
  modal.classList.add("fechando");
  const terminar = () => {
    modal.classList.remove("fechando");
    modal.close();
  };
  modal.querySelector(".modal-conteudo").addEventListener("animationend", terminar, { once: true });
  setTimeout(() => modal.open && terminar(), 300);
}

function iniciarModalCasos() {
  const modal = document.getElementById("modal-caso");
  const lista = document.getElementById("lista-casos");
  if (!modal || !lista) return;
  lista.addEventListener("click", (e) => {
    const botao = e.target.closest(".caso-abrir");
    if (botao) abrirCaso(Number(botao.dataset.caso));
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest("[data-fechar]")) fecharModal(modal);
    else if (e.target.closest('a[href^="#"]')) modal.close();
  });
  modal.addEventListener("cancel", (e) => {
    e.preventDefault();
    fecharModal(modal);
  });
}

function matiz(texto) {
  let h = 0;
  for (const c of String(texto)) h = (h * 31 + c.charCodeAt(0)) % 360;
  return h;
}

function capa(item) {
  const conteudo = item.imagem
    ? `<img src="${esc(item.imagem)}" alt="" loading="lazy">`
    : `<span class="capa-iniciais">${esc(iniciais(item.titulo))}</span>`;
  return `<div class="card-capa ${item.imagem ? "" : "capa-gerada"}" style="--matiz:${matiz(item.id || item.titulo)}">${conteudo}</div>`;
}

function botoesLinks(links = {}) {
  const itens = [];
  if (links.playStore) itens.push(["playstore", "Google Play", links.playStore]);
  if (links.appStore) itens.push(["appstore", "App Store", links.appStore]);
  if (links.site) itens.push(["site", "Ver site", links.site]);
  if (links.github) itens.push(["github", "Código", links.github]);
  return itens
    .map(([icone, rotulo, url]) => `<a class="chip-link" href="${esc(url)}" target="_blank" rel="noopener">${ICONES[icone]}${rotulo}</a>`)
    .join("");
}

function tags(lista, max = Infinity) {
  if (!lista?.length) return "";
  const visiveis = lista.slice(0, max);
  const resto = lista.length - visiveis.length;
  return `<ul class="tags">${visiveis.map((t) => `<li>${esc(t)}</li>`).join("")}${
    resto > 0 ? `<li class="tag-mais" title="${esc(lista.slice(max).join(", "))}">+${resto}</li>` : ""
  }</ul>`;
}

function cardParticipacao(p) {
  return `
    <article class="card cartao revelar">
      ${capa(p)}
      <div class="card-corpo">
        <div class="card-meta">
          <span class="badge">${esc(p.categoria)}</span>
          ${p.ano ? `<span class="ano">${esc(p.ano)}</span>` : ""}
        </div>
        <h3>${esc(p.titulo)}</h3>
        ${p.empresa ? `<p class="card-empresa">@ ${esc(p.empresa)}</p>` : ""}
        ${p.resumo ? `<p>${esc(p.resumo)}</p>` : ""}
        ${p.papel ? `<div class="card-papel"><span>meu papel</span>${esc(p.papel)}</div>` : ""}
        ${p.resultado ? `<div class="card-papel card-resultado"><span>resultado</span>${esc(p.resultado)}</div>` : ""}
        ${p.selos?.length ? `<div class="selos">${p.selos.map((s) => `<span class="selo">${esc(s)}</span>`).join("")}</div>` : ""}
        ${tags(p.tecnologias)}
        <div class="card-links">${botoesLinks(p.links)}</div>
      </div>
    </article>`;
}

function cardApp(a) {
  const st = STATUS_APP[a.status] || STATUS_APP["em-breve"];
  const politica = a.privacidade
    ? `<a class="chip-link chip-sutil" href="privacidade.html?app=${encodeURIComponent(a.id)}">${ICONES.escudo}Privacidade</a>`
    : "";
  return `
    <article class="card cartao revelar">
      ${capa(a)}
      <div class="card-corpo">
        <div class="card-meta">
          <span class="status-app ${st.classe}">${st.rotulo}</span>
          ${a.ano ? `<span class="ano">${esc(a.ano)}</span>` : ""}
        </div>
        <h3>${esc(a.titulo)}</h3>
        ${a.resumo ? `<p>${esc(a.resumo)}</p>` : ""}
        ${tags(a.tecnologias)}
        <div class="card-links">${botoesLinks(a.links)}${politica}</div>
      </div>
    </article>`;
}

function renderParticipacoes() {
  if (!LISTA_PART.length) {
    document.getElementById("projetos").hidden = true;
    return;
  }
  const lista = [...LISTA_PART].sort((a, b) => (b.ano || 0) - (a.ano || 0));
  const grade = document.getElementById("grade-projetos");
  const filtros = document.getElementById("filtros");
  const categorias = [...new Set(lista.map((p) => p.categoria).filter(Boolean))];

  const desenhar = (cat) => {
    const filtrados = cat === "Todos" ? lista : lista.filter((p) => p.categoria === cat);
    grade.innerHTML = filtrados.map(cardParticipacao).join("");
    iniciarBrilhoCartoes();
iniciarRevelar();
  };

  if (categorias.length > 1) {
    filtros.innerHTML = ["Todos", ...categorias]
      .map((c, i) => `<button type="button" class="filtro" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`)
      .join("");
    filtros.addEventListener("click", (e) => {
      const btn = e.target.closest(".filtro");
      if (!btn) return;
      filtros.querySelectorAll(".filtro").forEach((b) => b.setAttribute("aria-pressed", b === btn));
      desenhar(btn.dataset.cat);
    });
  }
  desenhar("Todos");
}

function renderMeusApps() {
  if (!LISTA_APPS.length) {
    document.getElementById("apps").hidden = true;
    return;
  }
  const ordem = { publicado: 0, desenvolvimento: 1, "em-breve": 2 };
  const lista = [...LISTA_APPS].sort((a, b) => (ordem[a.status] ?? 3) - (ordem[b.status] ?? 3));
  document.getElementById("grade-apps").innerHTML = lista.map(cardApp).join("");
}

function renderContato() {
  const itens = [];
  if (PERFIL.whatsapp) itens.push(["whatsapp", "WhatsApp", linkWhatsapp()]);
  if (PERFIL.email) itens.push(["email", PERFIL.email, `mailto:${PERFIL.email}`]);
  (PERFIL.redes || []).forEach((r) => itens.push([r.tipo, NOMES_REDES[r.tipo] || r.tipo, r.url]));

  document.getElementById("contato-links").innerHTML = itens
    .map(
      ([icone, rotulo, url]) =>
        `<a class="contato-item" href="${esc(url)}" ${url.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener"'}>
          ${ICONES[icone] || ICONES.site}<span>${esc(rotulo)}</span></a>`
    )
    .join("");
}

function renderListaPrivacidade() {
  const apps = LISTA_APPS.filter((p) => p.privacidade);
  if (!apps.length) {
    document.getElementById("bloco-privacidade").hidden = true;
    return;
  }
  document.getElementById("lista-privacidade").innerHTML = apps
    .map((p) => `<li><a href="privacidade.html?app=${encodeURIComponent(p.id)}">${esc(p.privacidade.nomeApp || p.titulo)}</a></li>`)
    .join("");
}

function iniciarRevelar() {
  const els = document.querySelectorAll(".revelar:not(.visivel)");
  if (!("IntersectionObserver" in window)) {
    els.forEach((e) => e.classList.add("visivel"));
    return;
  }
  const obs = new IntersectionObserver(
    (entradas) =>
      entradas.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visivel");
          obs.unobserve(e.target);
        }
      }),
    { threshold: 0.1 }
  );
  els.forEach((e) => obs.observe(e));
}

renderPerfil();
renderServicos();
renderCasos();
renderProcesso();
renderParticipacoes();
renderMeusApps();
renderContato();
iniciarContatoRapido();
iniciarModalCasos();
renderListaPrivacidade();
numerarSecoes();
preencherRodape();
iniciarTema();
iniciarRevelar();
