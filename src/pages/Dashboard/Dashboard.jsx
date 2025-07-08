import { Link, Outlet } from "react-router";

export const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/dashboard/settings">Configurações</Link>
      <Outlet />
    </div>
  );
};
