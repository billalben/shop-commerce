import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components/common";

function MainLayout() {
  return (
    <div>
      <Header />
      <div className="container my-3" style={{ minHeight: "calc(100vh - 158px)" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
