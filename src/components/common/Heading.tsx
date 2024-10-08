import { memo } from "react";

const Heading = memo(({ title }: { title: string }) => {
  return <h2 className="my-6 text-lg tracking-widest uppercase">{title} --</h2>;
});

export default Heading;
