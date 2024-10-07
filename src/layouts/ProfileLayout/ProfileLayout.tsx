import { NavLink, Outlet, useLocation } from "react-router-dom";

const ProfileLayout = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      <nav className="border md:basis-48">
        <NavLink
          to=""
          className={`block px-4 py-2 text-black ${
            location.pathname === "/profile" ? "bg-blue-600 text-white" : ""
          }`}
          aria-current="page"
        >
          Account Info
        </NavLink>

        <NavLink
          to="orders"
          className={`block px-4 py-2 text-black ${
            location.pathname === "/profile/orders"
              ? "bg-blue-600 text-white"
              : ""
          }`}
          aria-current="page"
        >
          Orders
        </NavLink>
      </nav>
      <div className="flex-1 p-4 border">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
