import { Link, NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-ativo" : "")}
      >
        Home navlink
      </NavLink>
      <br />
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "link-ativo" : "")}
      >
        Contatos
      </NavLink>
    </>
  );
};
