import { LottieHandler } from "@components/feedback";
import { Row, Col } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  emptyMessage: string;
};

/* _____________ The Render Props pattern _____________ */

const GridList = <T extends { _id?: number }>({
  records,
  renderItem,
  emptyMessage,
}: GridListProps<T>) => {
  const renderList =
    records.length > 0 ? (
      records.map((record) => (
        <Col key={record._id} xs={12} sm={6} md={4} lg={3}>
          {renderItem(record)}
        </Col>
      ))
    ) : (
      <LottieHandler type="empty" message={emptyMessage} />
    );

  return <Row className="gy-4">{renderList}</Row>;
};

export default GridList;
