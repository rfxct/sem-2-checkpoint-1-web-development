import PropTypes from "prop-types";
import "./style.css";

export default function Card({ id, title, description, background, iconUrl }) {
  return (
    <div className="card" style={{ backgroundColor: background }}>
      <div className="card__header">
        <h1 className="card__header__title">{id}</h1>
        <span
          className="card__header__icon"
          style={{ backgroundImage: `url(${iconUrl})` }}
        />
      </div>

      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
};
