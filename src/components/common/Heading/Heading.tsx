import { memo } from "react";

const Heading = memo(({ title }: { title: string }) => {
  return (
    <h2 className="text-uppercase mb-3 fs-4" style={{letterSpacing: 4}}>
      {title}
    </h2>
  );
});

export default Heading;
