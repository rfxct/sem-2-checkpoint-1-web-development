import PropTypes from "prop-types";
import "./style.css";

export default function SocialButton({ backgroundColor, ...props }) {
  return (
    <li className="social__link" style={{ backgroundColor }}>
      <a href={props.href} rel="noopener noreferer">
        <img src={`/social-logos/${props.iconKey}.svg`} />
      </a>
    </li>
  );
}

SocialButton.propTypes = {
  href: PropTypes.string,
  iconKey: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
