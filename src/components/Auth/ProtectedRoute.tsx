import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/store/hooks";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { expiry } = useAppSelector((state) => state.auth);

  if (!expiry || Date.now() >= expiry) {
    return <Navigate to="/login?message=login_required" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
