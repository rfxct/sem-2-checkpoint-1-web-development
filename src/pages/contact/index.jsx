import PropTypes from "prop-types";
import PageWrapper from "../../components/page-wrapper";
import "./style.css";

const socials = [
  {
    href: "https://twitter.com",
    iconKey: "twitter",
    backgroundColor: "#6975E8",
  },
  {
    href: "https://instagram.com",
    iconKey: "instagram",
    backgroundColor: "#fff",
  },
  {
    href: "https://discord.com",
    iconKey: "discord",
    backgroundColor: "#6975E8",
  },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="hero">
        <div className="hero__section">
          <h1 className="hero__title">Dúvidas e suporte, entre em contato:</h1>

          <ul className="social-links">
            {socials.map((info) => (
              <li key={info.iconKey}>
                <SocialButton {...info} />
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__section form left-divisor">
          <form className="form">
            <div className="form__group">
              <label htmlFor="name" className="form__label">
                Nome:
              </label>
              <input type="text" className="form__input" />
            </div>

            <div className="form__group">
              <label htmlFor="email" className="form__label">
                E-mail:
              </label>
              <input type="email" name="email" id="" className="form__input" />
            </div>

            <div className="form__group flex-column">
              <label htmlFor="message" className="form__label">
                Mensagem:
              </label>
              <textarea
                name="message"
                rows="10"
                className="form__input"
              ></textarea>
            </div>

            <button className="form__button flex-end">Enviar</button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}

const SocialButton = ({ backgroundColor, ...props }) => {
  return (
    <li className="social__link" style={{ backgroundColor }}>
      <a href={props.href} rel="noopener noreferer">
        <img src={`/social-logos/${props.iconKey}.svg`} />
      </a>
    </li>
  );
};

SocialButton.propTypes = {
  href: PropTypes.string,
  iconKey: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
