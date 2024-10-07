import { Link, useLocation } from "react-router-dom";
import HeaderLeftBar from "./HeaderLeftBar/HeaderLeftBar";
import LogoIcon from "@/assets/svg/logo.svg?react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { authLogout } from "@/store/auth/authSlice";
import { useEffect } from "react";
import { actGetWishlist } from "@/store/wishlist/wishlistSlice";
import { DropdownMenuDemo } from "@/components/DropdownMenu";
// pathname

const Header = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const { token, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(actGetWishlist("ProductIds"));
    }
  }, [dispatch, token]);

  const handleLogout = () => {
    dispatch(authLogout());
  };

  return (
    <header>
      <div className="container flex items-center justify-between py-3">
        <Link
          to="/"
          className="flex items-center gap-1 text-black no-underline"
        >
          <LogoIcon title="logo" />
          <h2 className="m-0 text-base font-bold capitalize tracking-widest">
            Shop
          </h2>
        </Link>

        <HeaderLeftBar />
      </div>

      <nav className="bg-gray-900">
        <ul className="container flex rounded-lg bg-gray-900 p-0 font-medium">
          <li>
            <Link
              to="/"
              className={`block px-4 py-2 text-white ${location.pathname === "/" ? "bg-blue-600" : ""}`}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/categories"
              className={`block px-4 py-2 text-white ${location.pathname === "/categories" ? "bg-blue-600" : ""}`}
              aria-current="page"
            >
              Categories
            </Link>
          </li>
          <li className="ml-auto flex">
            {!token ? (
              <>
                <Link
                  to="/login"
                  className={`block px-4 py-2 text-white ${location.pathname === "/login" ? "bg-blue-600" : ""}`}
                  aria-current="page"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`block px-4 py-2 text-white ${location.pathname === "/register" ? "bg-blue-600" : ""}`}
                  aria-current="page"
                >
                  Register
                </Link>
              </>
            ) : (
              <DropdownMenuDemo
                handleLogout={handleLogout}
                firstName={user?.firstName}
                lastName={user?.lastName}
              />
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
