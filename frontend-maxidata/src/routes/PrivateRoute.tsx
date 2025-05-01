import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem("auth_token")

  if (!token) return <Navigate to="/login" />
  return children;
}
