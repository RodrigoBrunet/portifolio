const LISTA_EXP = typeof EXPERIENCIAS !== "undefined" ? EXPERIENCIAS : [];
const semModelos = (lista) => (lista || []).filter((item) => !item.modelo);
const LISTA_PART = semModelos(typeof PARTICIPACOES !== "undefined" ? PARTICIPACOES : []);
const LISTA_APPS = semModelos(typeof MEUS_APPS !== "undefined" ? MEUS_APPS : []);

const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

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
function formatarMes(d) {
  return d ? `${MESES[d.m - 1]} ${d.a}` : "atual";
}
function formatarDuracao(meses) {
  const a = Math.floor(meses / 12);
  const m = meses % 12;
  const partes = [];
  if (a) partes.push(`${a} ${a === 1 ? "ano" : "anos"}`);
  if (m) partes.push(`${m} ${m === 1 ? "mês" : "meses"}`);
  return partes.join(" e ");
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

  renderNumeros(anos);
  document.getElementById("terminal-codigo").innerHTML = codigoTerminal();
}

function plural(n, singular, pluralTxt) {
  return n === 1 ? singular : pluralTxt;
}

function renderNumeros(anos) {
  const maiorTime = Math.max(
    0,
    ...LISTA_EXP.flatMap((e) => e.destaques || [])
      .filter((d) => /pessoas/i.test(d.rotulo))
      .map((d) => parseInt(d.valor, 10) || 0)
  );
  const publicados = LISTA_APPS.filter((a) => a.status === "publicado").length;
  const numeros = [
    [anos, plural(anos, "ano de experiência", "anos de experiência")],
    [LISTA_EXP.length, plural(LISTA_EXP.length, "experiência profissional", "experiências profissionais")],
    [maiorTime, "pessoas no maior time"],
    publicados
      ? [publicados, plural(publicados, "app publicado", "apps publicados")]
      : [LISTA_APPS.length, plural(LISTA_APPS.length, "app próprio", "apps próprios")],
  ].filter(([n]) => n > 0);

  const el = document.getElementById("numeros");
  if (!numeros.length) {
    el.hidden = true;
    return;
  }
  el.innerHTML = numeros
    .map(([n, rotulo]) => `<div class="numero"><strong>${esc(n)}</strong><span>${esc(rotulo)}</span></div>`)
    .join("");
}

function numerarSecoes() {
  const visiveis = [...document.querySelectorAll("section[data-numerada]")].filter((s) => !s.hidden);
  let links = 0;
  document.querySelectorAll("section[data-numerada]").forEach((secao) => {
    const i = visiveis.indexOf(secao);
    const num = i >= 0 ? String(i + 1).padStart(2, "0") + "." : "";
    secao.classList.toggle("secao-alt", i >= 0 && i % 2 === 0);
    secao.querySelectorAll(".rotulo [data-num]").forEach((n) => (n.textContent = num));
    const link = document.querySelector(`.menu a[href="#${secao.id}"]`);
    if (link) {
      link.hidden = i < 0;
      link.querySelector("[data-num]").textContent = num;
      if (i >= 0) links++;
    }
  });
  document.querySelector(".menu")?.classList.toggle("menu-cheio", links > 4);
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

const TRAJETORIA_VISIVEIS = 2;

function renderTrajetoria() {
  const el = document.getElementById("lista-trajetoria");
  if (!LISTA_EXP.length) {
    document.getElementById("trajetoria").hidden = true;
    return;
  }
  el.innerHTML = LISTA_EXP.map((e, i) => {
    const ini = lerMes(e.inicio);
    const fim = lerMes(e.fim);
    const atual = ini && !e.fim;
    const lista = e.experiencias || e.atividades || [];
    const periodo = ini
      ? `<p class="exp-periodo">
          ${atual ? '<span class="selo-atual">atual</span>' : ""}
          ${formatarMes(ini)} — ${formatarMes(fim)}
          <span class="exp-duracao">${formatarDuracao(mesesEntre(ini, fim))}</span>
        </p>`
      : "";
    return `
      <li class="exp revelar ${atual ? "exp-atual" : ""} ${i >= TRAJETORIA_VISIVEIS ? "exp-extra" : ""}"
        ${i >= TRAJETORIA_VISIVEIS ? "hidden" : ""}>
        <div class="exp-cabecalho">
          <div>
            <h3>${esc(e.cargo)}</h3>
            ${e.contexto ? `<p class="exp-contexto">${esc(e.contexto)}</p>` : ""}
          </div>
          ${periodo}
        </div>
        ${e.resumo ? `<p class="exp-resumo">${esc(e.resumo)}</p>` : ""}
        ${
          e.destaques?.length
            ? `<div class="exp-destaques">${e.destaques
                .map((d) => `<div><strong>${esc(d.valor)}</strong><span>${esc(d.rotulo)}</span></div>`)
                .join("")}</div>`
            : ""
        }
        ${tags(e.tecnologias, 4)}
        ${
          lista.length
            ? `<details class="exp-detalhes">
                <summary>ver detalhes</summary>
                <div class="exp-bloco"><span>experiências construídas</span>
                  <ul class="exp-atividades">${lista.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
                </div>
                ${e.tecnologias?.length > 4 ? `<div class="exp-bloco"><span>stack completa</span>${tags(e.tecnologias)}</div>` : ""}
              </details>`
            : ""
        }
      </li>`;
  }).join("");
  iniciarBotaoTrajetoria(el);
}

function iniciarBotaoTrajetoria(lista) {
  const btn = document.getElementById("btn-trajetoria");
  const extras = lista.querySelectorAll(".exp-extra");
  if (!extras.length) return;

  const rotulo = (aberto) =>
    aberto ? "recolher trajetória" : `ver trajetória completa (+${extras.length})`;
  btn.textContent = rotulo(false);
  btn.hidden = false;

  btn.addEventListener("click", () => {
    const abrir = btn.getAttribute("aria-expanded") !== "true";
    extras.forEach((li) => (li.hidden = !abrir));
    btn.setAttribute("aria-expanded", String(abrir));
    btn.textContent = rotulo(abrir);
    if (abrir) {
      extras[0].querySelector("h3")?.setAttribute("tabindex", "-1");
      extras[0].querySelector("h3")?.focus({ preventScroll: true });
    } else {
      btn.scrollIntoView({ block: "nearest" });
    }
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
    <article class="card revelar">
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
    <article class="card revelar">
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
  if (PERFIL.email) itens.push(["email", PERFIL.email, `mailto:${PERFIL.email}`]);
  if (PERFIL.whatsapp) itens.push(["whatsapp", "WhatsApp", `https://wa.me/${PERFIL.whatsapp}`]);
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
renderTrajetoria();
renderParticipacoes();
renderMeusApps();
renderContato();
renderListaPrivacidade();
numerarSecoes();
preencherRodape();
iniciarRevelar();
