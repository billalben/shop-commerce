import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { token } = useAppSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/login?message=login_required" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
