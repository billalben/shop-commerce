import { LottieHandler } from "@components/feedback";
import { Row, Col } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  emptyMessage: string;
};

/* _____________ The Render Props pattern _____________ */

const GridList = <T extends { id?: number }>({
  records,
  renderItem,
  emptyMessage,
}: GridListProps<T>) => {
  const renderList =
    records.length > 0 ? (
      records.map((record) => (
        <Col key={record.id} className="d-flex justify-content-center p-2">
          {renderItem(record)}
        </Col>
      ))
    ) : (
      <LottieHandler type="empty" message={emptyMessage} />
    );

  return (
    <Row className="justify-content-center gap-3" xs={2} sm={3} md={4} lg={5}>
      {renderList}
    </Row>
  );
};

export default GridList;
