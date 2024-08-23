import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function NavItem(props) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        isActive ? "navbar__nav-item active" : "navbar__nav-item"
      }
    >
      {props.children}
    </NavLink>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
