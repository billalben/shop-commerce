import { memo } from "react";

const Heading = memo(({ title }: { title: string }) => {
  return (
    <h2 className="text-uppercase my-4 fs-5" style={{letterSpacing: 4}}>
      {title} --
    </h2>
  );
});

export default Heading;
