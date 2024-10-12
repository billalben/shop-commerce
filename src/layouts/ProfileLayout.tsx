import { cn } from "@/lib/utils";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navLinks = [
  { title: "Account Info", to: "" },
  { title: "Orders", to: "orders" },
];

const ProfileLayout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col gap-4 p-4 md:flex-row">
      <nav className="self-start border md:basis-48">

        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={cn(
              "block px-4 py-2 text-black",
              location.pathname === `/profile/${link.to}` &&
                "bg-blue-600 text-white",
            )}
            aria-current="page"
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
      <div className="flex-1 p-4 border">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
