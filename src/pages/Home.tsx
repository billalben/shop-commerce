import Lottie from "lottie-react";
import heroSection from "@assets/lottieFiles/heroSection.json";
import { Badge, Button, Col, Row } from "react-bootstrap";

function Home() {
  return (
    <>
      <Row className="align-items-center justify-content-center">
        <Col xs="12" md="6">
          <span
            style={{ fontSize: "14px" }}
            className="fw-bolder text-muted text-uppercase"
          >
            #1 E-commerce Platform <Badge bg="secondary">2024</Badge>
          </span>
          <h1 className="display-1 text-primary mt-4">
            Explore, shop, repeat again.
          </h1>
          <p className="fs-6 text-muted">
            Shop is a driving force behind the dreams of emerging entrepreneurs,
            a trusted partner for industry leaders.
          </p>
          <Button variant="primary" className="mt-2">
            Explore
          </Button>
        </Col>

        <Col xs="12" md="6">
          <Lottie animationData={heroSection} />
        </Col>
      </Row>
    </>
  );
}

export default Home;
