function formatarData(iso) {
  if (!iso) return "";
  const [a, m, d] = iso.split("-").map(Number);
  return new Date(a, m - 1, d).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function lista(itens) {
  return `<ul>${itens.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
}

function politica(p) {
  const d = p.privacidade;
  const app = esc(d.nomeApp || p.titulo);
  const dev = esc(d.desenvolvedor || PERFIL.nome);
  const email = d.emailContato || PERFIL.email;
  const emailLink = `<a href="mailto:${esc(email)}">${esc(email)}</a>`;
  const terceiros = d.servicosTerceiros || [];
  const permissoes = d.permissoes || [];

  const secoes = [];

  secoes.push(`
    <p>Esta Política de Privacidade descreve como o aplicativo <strong>${app}</strong>,
    desenvolvido por <strong>${dev}</strong>, coleta, usa e protege as informações dos usuários.
    Ao utilizar o app, você concorda com as práticas descritas aqui.</p>`);

  if (d.coletaDados === false) {
    secoes.push(`
      <h2>Coleta de dados</h2>
      <p>O <strong>${app}</strong> <strong>não coleta, armazena nem compartilha</strong> dados pessoais
      dos usuários. Todas as informações inseridas no app permanecem apenas no seu dispositivo.</p>`);
  } else {
    secoes.push(`
      <h2>Dados coletados</h2>
      <p>Podemos coletar as seguintes informações:</p>
      ${lista(d.dadosColetados || [])}
      <h2>Como usamos os dados</h2>
      ${lista(d.finalidades || [])}
      <p>Não vendemos seus dados pessoais a terceiros.</p>`);
  }

  if (permissoes.length) {
    secoes.push(`<h2>Permissões do dispositivo</h2>${lista(permissoes)}`);
  }

  if (terceiros.length) {
    secoes.push(`
      <h2>Serviços de terceiros</h2>
      <p>O app utiliza serviços de terceiros que podem coletar informações conforme suas próprias políticas:</p>
      <ul>${terceiros
        .map((t) =>
          t.url
            ? `<li><a href="${esc(t.url)}" target="_blank" rel="noopener">${esc(t.nome)}</a></li>`
            : `<li>${esc(t.nome)}</li>`
        )
        .join("")}</ul>`);
  }

  if (d.retencao) secoes.push(`<h2>Retenção dos dados</h2><p>${esc(d.retencao)}</p>`);

  secoes.push(`
    <h2>Segurança</h2>
    <p>Adotamos medidas razoáveis para proteger as informações contra acesso não autorizado,
    porém nenhum método de transmissão ou armazenamento eletrônico é 100% seguro.</p>

    <h2>Privacidade de crianças</h2>
    <p>O app não é direcionado a menores de 13 anos e não coleta intencionalmente dados pessoais de crianças.
    Caso identifique que uma criança nos forneceu dados, entre em contato para que possamos removê-los.</p>

    <h2>Seus direitos (LGPD)</h2>
    <p>De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar a qualquer momento
    a confirmação, o acesso, a correção ou a exclusão dos seus dados pessoais pelo e-mail ${emailLink}.</p>`);

  secoes.push(`
    <section id="exclusao" class="destaque-exclusao">
      <h2>Exclusão de conta e dados</h2>
      <p>${esc(
        d.exclusao ||
          "Para solicitar a exclusão dos seus dados, envie um e-mail para o endereço de contato abaixo."
      )}</p>
      <p><a class="botao" href="mailto:${esc(email)}?subject=${encodeURIComponent(
        "Exclusão de dados - " + (d.nomeApp || p.titulo)
      )}">Solicitar exclusão por e-mail</a></p>
    </section>`);

  secoes.push(`
    <h2>Alterações nesta política</h2>
    <p>Esta política pode ser atualizada periodicamente. Recomendamos revisá-la regularmente.
    Alterações entram em vigor assim que publicadas nesta página.</p>

    <h2>Contato</h2>
    <p>Dúvidas sobre esta Política de Privacidade: ${emailLink}</p>`);

  return `
    <p class="sobretitulo">Política de Privacidade</p>
    <h1>${app}</h1>
    ${d.atualizadoEm ? `<p class="atualizado">Última atualização: ${formatarData(d.atualizadoEm)}</p>` : ""}
    ${secoes.join("")}`;
}

function indice(apps) {
  return `
    <p class="sobretitulo">Privacidade</p>
    <h1>Políticas de Privacidade</h1>
    <p>Selecione o aplicativo:</p>
    <ul class="lista-apps">${apps
      .map(
        (p) =>
          `<li><a href="?app=${encodeURIComponent(p.id)}">${esc(p.privacidade.nomeApp || p.titulo)}</a></li>`
      )
      .join("")}</ul>`;
}

(function () {
  preencherRodape();

  const id = new URLSearchParams(location.search).get("app");
  const apps = MEUS_APPS.filter((p) => p.privacidade);
  const conteudo = document.getElementById("conteudo");
  const projeto = apps.find((p) => p.id === id);

  if (projeto) {
    document.title = `Política de Privacidade — ${projeto.privacidade.nomeApp || projeto.titulo}`;
    conteudo.innerHTML = politica(projeto);
    if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
  } else if (id) {
    conteudo.innerHTML = `<h1>App não encontrado</h1><p>Nenhuma política cadastrada para “${esc(
      id
    )}”.</p>${apps.length ? indice(apps) : ""}`;
  } else {
    conteudo.innerHTML = apps.length ? indice(apps) : "<h1>Nenhuma política cadastrada.</h1>";
  }
})();
