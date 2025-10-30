// === SCRIPT DE TROCA DE IDIOMA ===
// Autor: THModa Sustentável Unissex 🌿
// Cria alternância entre Português e Inglês de forma simples

const traducao = {
  pt: {
    siteTitle: "TH Moda Sustentável Unissex",
    sobre: "Sobre",
    loja: "Loja",
    blog: "Blog",
    cursos: "Cursos",
    contato: "Contato",
    introducao:
      "A TH Moda Sustentável Unissex é um espaço dedicado à moda consciente, ecológica e ética — promovendo estilo e responsabilidade ambiental.",
    rodape: "© 2025 TH Moda Sustentável Unissex — Todos os direitos reservados.",
  },
  en: {
    siteTitle: "TH Sustainable Unisex Fashion",
    sobre: "About",
    loja: "Shop",
    blog: "Blog",
    cursos: "Courses",
    contato: "Contact",
    introducao:
      "TH Sustainable Unisex Fashion is a space dedicated to conscious, eco-friendly and ethical fashion — promoting style with environmental responsibility.",
    rodape: "© 2025 TH Sustainable Unisex Fashion — All rights reserved.",
  },
};

let idiomaAtual = "pt";

document.getElementById("lang-btn").addEventListener("click", () => {
  idiomaAtual = idiomaAtual === "pt" ? "en" : "pt";
  aplicarIdioma();
});

function aplicarIdioma() {
  const t = traducao[idiomaAtual];
  document.querySelector("header h1").textContent = t.siteTitle;
  document.querySelector("a[href='index.html']").textContent = t.sobre;
  document.querySelector("a[href='loja.html']").textContent = t.loja;
  document.querySelector("a[href='blog.html']").textContent = t.blog;
  document.querySelector("a[href='cursos.html']").textContent = t.cursos;
  document.querySelector("a[href='contato.html']").textContent = t.contato;
  document.querySelector(".intro p").textContent = t.introducao;
  document.querySelector("footer").textContent = t.rodape;

  // Atualiza o texto do botão
  document.getElementById("lang-btn").textContent =
    idiomaAtual === "pt" ? "EN" : "PT";
}

// Aplica o idioma padrão ao carregar
document.addEventListener("DOMContentLoaded", aplicarIdioma);
