const sources = [
  {
    title: "britannica.com",
    description: "Name der Religion / Ursprung / Verbreitung",
    url: "https://www.britannica.com/topic/Taoism",
    category: "Webseite"
  },
  {
    title: "plato.stanford.edu",
    description: "Glaube und Grundideen des Taoismus",
    url: "https://plato.stanford.edu/entries/daoism/",
    category: "Webseite"
  },
  {
    title: "worldhistory.org",
    description: "Heilige Schriften (Tao Te King, Zhuangzi)",
    url: "https://www.worldhistory.org/Taoism/",
    category: "Webseite"
  },
  {
    title: "learnreligions.com",
    description: "Symbole, Lehren und Prinzipien (Yin & Yang, Wu Wei)",
    url: "https://www.learnreligions.com/taoist-visual-symbols-4123169",
    category: "Webseite"
  },
  {
    title: "bpb.de",
    description: "Allgemeine Informationen über Religionen",
    url: "https://www.bpb.de",
    category: "Webseite"
  },
  {
    title: "Daodejing Buch Bild",
    description: "Daodejing von Laozi",
    url: "https://www.amazon.de/Daodejing-English-Laozi-ebook/dp/B0B3GLJVYS?dplnkId=ea901bc1-7022-49f8-af5e-330db54962c0&nodl=1",
    category: "Webseite"
  },
  {
    title: "Zhuangzi Buch Bild",
    description: "Zhuangzi von Zhuangzi",
    url: "https://www.osiander.de/shop/home/artikeldetails/A1073088909",
    category: "Webseite"
  },
   {
    title: "Sonstige Bilder",
    description: "sonstige Informationen",
    url: "https://www.learnreligions.com/taoist-visual-symbols-4123169",
    category: "Webseite"
  },

];

const sourcesGrid = document.getElementById("sourcesGrid");

function renderSources() {

  sources.forEach(source => {
    const card = document.createElement("a");
    card.className = "source-card";
    card.href = source.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    card.innerHTML = `
      <span class="source-tag">${source.category}</span>
      <h3>${source.title}</h3>
      <p>${source.description}</p>
      <span class="source-link">Quelle öffnen →</span>
    `;

    sourcesGrid.appendChild(card);
  });
}

renderSources();