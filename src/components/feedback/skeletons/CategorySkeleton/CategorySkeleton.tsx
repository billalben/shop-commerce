import ContentLoader from "react-content-loader";
import { Row, Col } from "react-bootstrap";

const CategorySkeleton = () => {
  const skeletons = Array.from({ length: 4 }, (_, idx) => (
    <Col key={idx} className="d-flex justify-content-center p-2">
      <ContentLoader
        speed={2}
        width={200}
        height={200}
        viewBox="0 0 200 200"
        backgroundColor="#f0f0f0"
        foregroundColor="#d6d6d6"
      >
        <rect x="61" y="179" rx="3" ry="3" width="86" height="8" />
        <circle cx="104" cy="84" r="84" />
      </ContentLoader>
    </Col>
  ));

  return (
    <Row xs={2} sm={3} md={4} lg={5} className="justify-content-center gap-2">
      {skeletons}
    </Row>
  );
};

export default CategorySkeleton;
