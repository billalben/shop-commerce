import { Link, useLocation, useNavigate } from "react-router-dom";
import HeaderLeftBar from "./HeaderLeftBar";
import LogoIcon from "@/assets/svg/logo.svg?react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { actAuthLogout } from "@/store/auth/authSlice";
import { useEffect } from "react";
import { actGetWishlist } from "@/store/wishlist/wishlistSlice";
import { DropdownMenuDemo } from "@/components/common/Header/DropdownMenu";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Header = () => {
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { token, user, expiry } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(actGetWishlist("ProductIds"));
    }

    if (expiry && Date.now() >= expiry) {
      dispatch(actAuthLogout());
    }
  }, [dispatch, token, expiry]);

  const handleLogout = async () => {
    try {
      const result = await dispatch(actAuthLogout()).unwrap();

      toast({
        title: "Success",
        description: result,
      });

      navigate("/");
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <header>
      <div className="container flex items-center justify-between px-2 py-3">
        <Link
          to="/"
          className="flex items-center gap-1 text-black no-underline"
        >
          <LogoIcon title="logo" />
          <h2 className="m-0 text-base font-bold tracking-widest capitalize">
            Shop
          </h2>
        </Link>

        <HeaderLeftBar />
      </div>

      <nav className="px-2 bg-gray-900">
        <ul className="container flex p-0 font-medium bg-gray-900 rounded-lg">
          <li>
            <Link
              to="/"
              className={cn(
                "block px-4 py-2 text-white",
                location.pathname === "/" && "bg-blue-600",
              )}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className={cn(
                "block px-4 py-2 text-white",
                location.pathname === "/categories" && "bg-blue-600",
              )}
              aria-current="page"
            >
              Categories
            </Link>
          </li>
          <li className="flex ml-auto">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className={cn(
                    "block px-4 py-2 text-white",
                    location.pathname === "/login" && "bg-blue-600",
                  )}
                  aria-current="page"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={cn(
                    "block px-4 py-2 text-white",
                    location.pathname === "/register" && "bg-blue-600",
                  )}
                  aria-current="page"
                >
                  Register
                </Link>
              </>
            ) : (
              <DropdownMenuDemo
                handleLogout={handleLogout}
                imageProfile={user?.imageProfile || ""}
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
