import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components/common";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="container px-2 my-3 min-h-[calc(100vh-158px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
