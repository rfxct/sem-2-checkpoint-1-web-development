import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import mc from "../../../utils/merge-classname";

export default function NavItem(props) {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => mc("navbar__nav-item", isActive && "active")}
    >
      {props.children}
    </NavLink>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
};
