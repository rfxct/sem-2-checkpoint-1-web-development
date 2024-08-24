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
