import NavItem from "./components/nav-item";
import './style.css'
import { routes } from "../../utils/const/routes";

export default function Navbar() {
  return (
    <nav className="navbar">
      {routes.map((route) => (
        <NavItem key={route.name} to={route.path}>
          {route.name}
        </NavItem>
      ))}
    </nav>
  );
}
