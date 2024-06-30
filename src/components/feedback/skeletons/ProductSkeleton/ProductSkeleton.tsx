import ContentLoader from "react-content-loader";
import { Row, Col } from "react-bootstrap";

const ProductSkeleton = () => {
  const skeletons = Array.from({ length: 3 }, (_, idx) => (
    <Col key={idx} className="d-flex justify-content-center p-2">
      <ContentLoader
        speed={2}
        width={190}
        height={300}
        viewBox="0 0 190 300"
        backgroundColor="#f0f0f0"
        foregroundColor="#d6d6d6"
      >
        <rect x="32" y="179" rx="3" ry="3" width="105" height="8" />
        <rect x="31" y="4" rx="0" ry="0" width="119" height="162" />
        <rect x="32" y="199" rx="3" ry="3" width="86" height="9" />
        <rect x="32" y="220" rx="3" ry="3" width="86" height="9" />
        <rect x="31" y="239" rx="0" ry="0" width="118" height="22" />
      </ContentLoader>
    </Col>
  ));

  return (
    <Row xs={2} sm={3} md={4} lg={5} className="justify-content-center gap-2">
      {skeletons}
    </Row>
  );
};

export default ProductSkeleton;
