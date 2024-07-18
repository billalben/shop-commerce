import { Col, Row } from "react-bootstrap";
import FacebookIcon from "@assets/svg/facebook.svg?react";
import TwitterIcon from "@assets/svg/twitter.svg?react";
import LinkedinIcon from "@assets/svg/linkedin.svg?react";
import styles from "./styles.module.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className={`text-secondary ${styles.footer}`}>
      <Row className="container mx-auto">
        <Col xs={12} md={4}>
          <h3 className="text-white fs-3 fw-bolder">Shop</h3>
          <ul className={`d-flex gap-2 my-4 ${styles.social}`}>
            <li>
              <a
                href="https://www.facebook.com/billal.benzazoua"
                target="_blank"
                className={styles.facebook}
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/billal-benzazoua/"
                target="_blank"
                className={styles.twitter}
              >
                <TwitterIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/billal-benzazoua/"
                target="_blank"
                className={styles.linkedin}
              >
                <LinkedinIcon />
              </a>
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            aliquid porro nihil voluptas molestiae sed!
          </p>
        </Col>
        <Col xs={12} md={4}>
          <ul className={styles.links}>
            <li>
              <a
                href="#"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={4}>
          <ul className={styles.links}>
            <li>
              <a
                href="#"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Refund Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                Shipping Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                FAQ
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <div
        className={`text-center py-3 border-top border-secondary ${styles.footer}`}
      >
        Made With &gt;3 By billal &copy; {date} Our E-commerce. All rights
        reserved.
      </div>
    </div>
  );
}

export default Footer;
