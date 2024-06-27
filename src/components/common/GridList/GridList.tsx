import { Row, Col } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  // renderItem: (record: T) => JSX.Element;
};

/* _____________ The Render Props pattern _____________ */

const GridList = <T extends { id?: number }>({
  records,
  renderItem,
}: GridListProps<T>) => {
  const renderList =
    records.length > 0
      ? records.map((record) => (
          <Col key={record.id} className="d-flex justify-content-center p-2">
            {renderItem(record)}
          </Col>
        ))
      : "there are no records ䷢";

  return (
    <Row xs={2} sm={3} md={4} lg={5} className="justify-content-center gap-2 my-5">
      {renderList}
    </Row>
  );
};

export default GridList;
