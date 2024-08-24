import PropTypes from "prop-types";
import "./style.css";
import mc from "../../utils/merge-classname";

export default function PlanCard(props) {
  return (
    <div className={mc("plan-card", props.solid && "solid")}>
      <div className="plan-card__header">
        <span>{props.title}</span>
      </div>

      <div className={mc("plan-card__content", props.className)}>
        {props.children}
      </div>

      <div className="plan-card__footer">
        <button className="subscribe-button">
          {props.subscribeText ?? "Cadastrar"}
        </button>
      </div>
    </div>
  );
}

PlanCard.propTypes = {
  solid: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  subscribeText: PropTypes.string,
  className: PropTypes.string,
};

function PlanCardDetail(props) {
  return (
    <div className="plan-card__detail">
      <p className="plan-card__detail__title">{props.title}</p>

      <div className="plan-card__detail__pricing">
        <span className="plan-card__detail__pricing__description">
          {props.description}
        </span>

        <span className="plan-card__detail__pricing__price">
          R$<b>{props.price}</b>
        </span>
      </div>
    </div>
  );
}

PlanCardDetail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.string,
};

PlanCard.Detail = PlanCardDetail;
