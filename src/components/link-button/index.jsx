import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.css";

export default function LinkButton(props) {
  return (
    <Link className="link-button" to={props.to}>
      {props.children}
    </Link>
  );
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
