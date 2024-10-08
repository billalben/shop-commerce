import { Outlet } from "react-router-dom";
import { Header, Footer } from "@/components/common";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container flex-grow px-2 my-3 min-h-[calc(100vh-158px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
