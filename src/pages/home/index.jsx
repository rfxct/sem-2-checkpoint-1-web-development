import LinkButton from "../../components/link-button";
import Card from "../../components/card";
import PageWrapper from "../../components/page-wrapper";
import "./style.css";

/**
 * - `title`: Nome do card
 * - `description`: Descrição do card
 * - `backgroundColor`: Cor de fundo do card
 *
 * @type {Array<{
 *   title: string,
 *   description: string,
 *   backgroundColor: string
 * }>}
 */
const cards = [
  {
    title: "Youtube",
    description:
      "Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
    backgroundColor: "#F1C2B0",
  },
  {
    title: "Tiktok",
    description:
      "Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
    backgroundColor: "#F9EB98",
  },
  {
    title: "Facebook",
    description:
      "Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
    backgroundColor: "#C0D9DD",
  },

  {
    title: "Instagram",
    description:
      "Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
    backgroundColor: "#6975E8",
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
