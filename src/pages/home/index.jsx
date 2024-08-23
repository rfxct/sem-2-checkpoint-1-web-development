import LinkButton from "../../components/button";
import Card from "../../components/card";
import PageWrapper from "../../components/page-wrapper";
import "./style.css";
/**
 * Representa um cartão com informações sobre uma plataforma de mídia social.
 *
 * @typedef {Object} Card
 * @property {string} title - O título do cartão.
 * @property {string} description - A descrição detalhada do cartão.
 * @property {string} background - A descrição detalhada do cartão.
 */

/**
 * Um array de cartões que representam diferentes plataformas de mídia social.
 *
 * @type {Card[]}
 */
const cards = [
  {
    title: "Youtube",
    description:
      "Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
    background: "#F1C2B0",
  },
  {
    title: "Tiktok",
    description:
      "Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
    background: "#F9EB98",
  },
  {
    title: "Facebook",
    description:
      "Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
    background: "#C0D9DD",
  },

  {
    title: "Instagram",
    description:
      "Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
    background: "#6975E8",
  },
];

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="hero">
        <div className="hero__section">
          <h1 className="hero__title">Crie seus vídeos online</h1>
          <p className="hero__description">
            Transforme suas ideias em filmes memoráveis: onde a criatividade
            encontra a simplicidade.
          </p>

          <LinkButton to="#">Começar agora!</LinkButton>
        </div>

        <div className="hero__section">
          <img
            className="hero__image"
            src="video-banner.svg"
            alt="Homem saltando"
          />
        </div>
      </div>

      <div className="home__cards">
        {cards.map((cardInfo, i) => (
          <Card
            {...cardInfo}
            id={String(i + 1).padStart(2, "0")}
            key={cardInfo.title}
            iconUrl={`/card-logos/${cardInfo.title.toLowerCase()}.jpeg`}
          />
        ))}
      </div>
    </PageWrapper>
  );
}
