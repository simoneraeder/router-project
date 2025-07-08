import { Link, NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-ativo" : "")}
      >
        {({ isActive }) => <span> {isActive ? "🏠 Home" : "Home"}</span>}
      </NavLink>
      <br />
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "link-ativo" : "")}
      >
        {({ isActive }) => <span> {isActive ? "☎️ Contato" : "Contato"}</span>}
      </NavLink>
    </>
  );
};
