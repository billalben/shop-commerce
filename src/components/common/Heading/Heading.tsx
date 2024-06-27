import { memo } from "react";

const Heading = memo(({ title }: { title: string }) => {
  return (
    <h2 className="text-uppercase mb-3 fs-3">
      {title}
    </h2>
  );
});

export default Heading;
