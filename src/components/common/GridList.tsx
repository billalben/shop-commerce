import { LottieHandler } from "@/components/feedback";

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
      records.map((record) => <div key={record._id}>{renderItem(record)}</div>)
    ) : (
      <LottieHandler type="empty" message={emptyMessage} />
    );

  return (
    <div className="grid gap-4 gy-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {renderList}
    </div>
  );
};

export default GridList;
