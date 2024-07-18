import { Outlet } from "react-router-dom";
import { Header, Footer } from "@components/common";

const style = {
  minHeight: "calc(100vh - 126px)",
};

function MainLayout() {
  return (
    <div>
      <Header />
      <div style={style} className="container my-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
