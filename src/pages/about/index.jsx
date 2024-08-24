import LinkButton from "../../components/link-button";
import PageWrapper from "../../components/page-wrapper";
import PlanCard from "../../components/plan-card";
import "./style.css";

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="hero">
        <div className="hero__section">
          <h1 className="hero__title">Bem-vindo à revolução dos vídeos!</h1>
          <p className="hero__description">
            Somos uma startup com o objetivo de facilitar a produção de conteúdo
            em larga escala com qualidade profissional, capaz de atingir uma
            audiência de milhões de seguidores.
          </p>

          <LinkButton to="#">Baixe o app</LinkButton>
        </div>

        <div className="hero__section">
          <img
            className="hero__image"
            style={{ maxHeight: "80%" }}
            src="mocks.svg"
            alt="Capturas de tela do aplicativo"
          />
        </div>
      </div>

      <div className="about-content">
        <h1 className="about-content__title">Planos</h1>

        <div className="about-content__plans">
          <PlanCard title="Individual" solid></PlanCard>

          <PlanCard title="Profissional - Times"></PlanCard>

          <PlanCard
            title="Corporativo"
            subscribeText="Entre em Contato"
            className="flex-center"
          >
            <img src="corporation.svg" />
          </PlanCard>
        </div>
      </div>
    </PageWrapper>
  );
}
