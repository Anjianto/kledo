import { useIsAuthenticated } from "src/services/auth";

export const Dashboard = () => {
  const { isAuthenticated } = useIsAuthenticated();

  return isAuthenticated ? <div>Dashboard</div> : null;
};
