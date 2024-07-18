import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import HeaderLeftBar from "./HeaderLeftBar/HeaderLeftBar";
import styles from "./styles.module.css";
import LogoIcon from "@assets/svg/logo.svg?react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import { actGetWishlist } from "@store/wishlist/wishlistSlice";
import { authLogout } from "@store/auth/authSlice";
const { headerLogo } = styles;

const Header = () => {
  const dispatch = useAppDispatch();

  const { accessToken, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (accessToken) {
      dispatch(actGetWishlist("ProductIds"));
    }
  }, [dispatch, accessToken]);

  return (
    <header>
      <div className="d-flex justify-content-between align-items-center py-3 container">
        <Link to="/" className={`d-flex align-items-center text-decoration-none gap-1 text-black ${headerLogo}`}>
          <LogoIcon title="logo" />
          <h2>Shop</h2>
        </Link>

        <HeaderLeftBar />
      </div>

      <Navbar
        expand="sm"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="categories">
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="about-us">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              {!accessToken ? (
                <>
                  <Nav.Link as={NavLink} to="login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="register">
                    Register
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={`Welcome: ${user?.firstName} ${user?.lastName}`}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={NavLink} to="profile" end>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="profile/orders">
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/"
                    onClick={() => dispatch(authLogout())}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
