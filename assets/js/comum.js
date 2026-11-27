function esc(texto) {
  return String(texto ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function iniciais(nome) {
  return String(nome || "?")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join("");
}

const ICONES = {
  github:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.3-1.69-1.3-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM12 2c-2.7 0-3.1 0-4.1.06-1.07.05-1.8.22-2.43.46a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 2.52 5.47c-.24.64-.41 1.36-.46 2.43C2 8.9 2 9.3 2 12s0 3.1.06 4.1c.05 1.07.22 1.8.46 2.43.25.66.6 1.22 1.15 1.77.55.56 1.11.9 1.77 1.15.64.25 1.36.42 2.43.47 1 .05 1.4.06 4.1.06s3.1 0 4.1-.06c1.07-.05 1.8-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.15c.56-.55.9-1.11 1.15-1.77.25-.64.42-1.36.47-2.43.05-1 .06-1.4.06-4.1s0-3.1-.06-4.1c-.05-1.07-.22-1.8-.47-2.43a4.9 4.9 0 0 0-1.15-1.77 4.9 4.9 0 0 0-1.77-1.15c-.64-.24-1.36-.41-2.43-.46C15.1 2 14.7 2 12 2Z"/></svg>',
  playstore:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l.1.1 9.9-9.9v-.2L3.7 1.7l-.1.1Zm13.3 13.9-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.7 0 2.3l-3.9 2.2h-.1Zm.1-.1L13.6 12 3.6 22c.4.4 1 .4 1.7.1l11.7-6.5M17 8.4 5.3 1.8c-.7-.4-1.3-.3-1.7.1l10 10L17 8.4Z"/></svg>',
  appstore:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.37 12.6c-.03-2.6 2.12-3.85 2.22-3.91a4.78 4.78 0 0 0-3.76-2.03c-1.6-.16-3.12.94-3.93.94-.82 0-2.07-.92-3.4-.9a5.03 5.03 0 0 0-4.25 2.58c-1.81 3.14-.46 7.8 1.3 10.35.86 1.25 1.89 2.65 3.24 2.6 1.3-.05 1.79-.84 3.36-.84s2.01.84 3.38.81c1.4-.02 2.29-1.27 3.14-2.53a11 11 0 0 0 1.43-2.92 4.53 4.53 0 0 1-2.73-4.15ZM13.79 4.98A4.5 4.5 0 0 0 14.85 1.7a4.6 4.6 0 0 0-2.98 1.54 4.3 4.3 0 0 0-1.08 3.17 3.8 3.8 0 0 0 3-1.43Z"/></svg>',
  site:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
  email:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm-1 1 9 7 9-7"/></svg>',
  whatsapp:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48a9 9 0 0 1-1.66-2.07c-.17-.3 0-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.48.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35ZM12.04 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.72.97 1-3.62-.24-.37a9.8 9.8 0 1 1 8.33 4.6Zm8.34-18.13A11.73 11.73 0 0 0 12.04.2 11.8 11.8 0 0 0 1.82 17.9L.15 24l6.25-1.64a11.8 11.8 0 0 0 5.64 1.43h.01A11.8 11.8 0 0 0 23.85 12a11.7 11.7 0 0 0-3.47-8.33Z"/></svg>',
  fechar:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M6 6l12 12M18 6 6 18"/></svg>',
  escudo:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z"/></svg>',
};

const ICONES_TEC = {
  flutter:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14.31 0 2.3 12 6 15.7 21.68 0h-7.37Zm.02 11.07-6.47 6.46 6.47 6.47h7.37l-6.46-6.47 6.46-6.46h-7.37Z"/></svg>',
  dart:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M4.1 4.1 11.7.3c1.2-.6 2.4-.3 3.1.5L24 9.9v9.8h-4.3V24H9.8l-9-9C.3 14.5 0 13.8 0 13.1c0-.3.2-.8.3-1.1L4.1 4.1Zm.7.7v11.8c0 .5 0 1 .5 1.5l4.9 4.9h8.5v-4.3L4.8 4.8Zm12-.7-2.7-2.6c-.3-.3-.6-.5-1.1-.5-.4 0-.9.2-.9.2L6.3 4.1h10.5Z"/></svg>',
  android:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" d="m6.6 6.2 2 3.3m8.8-3.3-2 3.3"/><path fill="currentColor" fill-rule="evenodd" d="M2 18a10 9 0 0 1 20 0H2Zm5.8-3.6a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Zm8.4 0a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z"/></svg>',
  ios: ICONES.appstore,
  java:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" d="M9.5 2.5c-1.6 1.6 1.4 2.6-.2 4.8M13 1.8c-1.7 2 1.6 3.1-.1 5.7M17 13.5h1.2a2.3 2.3 0 0 1 0 4.6H16.3M3.5 21.6h15"/><path fill="currentColor" d="M4.5 11h12.5v4.5a4.5 4.5 0 0 1-4.5 4.5H9a4.5 4.5 0 0 1-4.5-4.5V11Z"/></svg>',
  angular:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M12 1.5 2.3 5l1.5 12.6L12 22.5l8.2-4.9L21.7 5 12 1.5Zm0 2.6L6 17.6h2.2l1.2-3h5.2l1.2 3H18L12 4.1Zm1.8 8.7h-3.6L12 8.4l1.8 4.4Z"/></svg>',
};

const ICONES_SERVICO = {
  celular: '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/></g></svg>',
  monitor: '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></g></svg>',
  publicar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M12 15V3m-4 4 4-4 4 4M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></svg>',
  api: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="m8 8-4 4 4 4m8-8 4 4-4 4M14 4l-4 16"/></svg>',
  camadas: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M12 3 2 8l10 5 10-5-10-5ZM2 16l10 5 10-5M2 12l10 5 10-5"/></svg>',
  ferramenta: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5Z"/></svg>',
};

const ICONES_TEMA = {
  sol: '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></g></svg>',
  lua: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/></svg>',
};

const COR_TOPO = { escuro: "#05070f", claro: "#e9eef5" };

function iniciarTema() {
  const topo = document.querySelector(".topo-conteudo");
  const menu = topo?.querySelector(".menu");
  if (!topo || !menu) return;

  const acoes = document.createElement("div");
  acoes.className = "topo-acoes";
  menu.replaceWith(acoes);
  acoes.append(menu);

  const botao = document.createElement("button");
  botao.type = "button";
  botao.className = "botao-tema";
  acoes.append(botao);

  const metaCor = document.querySelector('meta[name="theme-color"]');
  const aplicar = (claro) => {
    if (claro) document.documentElement.dataset.theme = "light";
    else delete document.documentElement.dataset.theme;
    botao.innerHTML = claro ? ICONES_TEMA.lua : ICONES_TEMA.sol;
    botao.setAttribute("aria-label", claro ? "Ativar modo escuro" : "Ativar modo claro");
    botao.title = botao.getAttribute("aria-label");
    if (metaCor) metaCor.content = claro ? COR_TOPO.claro : COR_TOPO.escuro;
  };

  aplicar(false);
  botao.addEventListener("click", () => aplicar(document.documentElement.dataset.theme !== "light"));
}

const NOMES_REDES = {
  github: "GitHub",
  linkedin: "LinkedIn",
  instagram: "Instagram",
  playstore: "Google Play",
  appstore: "App Store",
  site: "Site",
  email: "E-mail",
  whatsapp: "WhatsApp",
};

function preencherRodape() {
  const el = document.getElementById("rodape-texto");
  if (el) el.textContent = `© ${new Date().getFullYear()} ${PERFIL.nome}. Todos os direitos reservados.`;
  const primeiro = String(PERFIL.nome).trim().split(/\s+/)[0];
  document.querySelectorAll("[data-nome]").forEach(
    (n) =>
      (n.innerHTML =
        `<span class="nome-completo">${esc(PERFIL.nome)}</span>` +
        `<span class="nome-curto">${esc(primeiro)}</span>` +
        `<span class="nome-iniciais">${esc(iniciais(PERFIL.nome))}</span>`)
  );
}
