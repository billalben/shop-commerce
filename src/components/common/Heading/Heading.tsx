import React from "react";

type HeadingProps = {
  className?: string;
  children: React.ReactNode;
};

const Heading = ({ className, children }: HeadingProps) => {
  return (
    <h2 className={`mb-3 ${className ?? ""}`} style={{ fontSize: "26px" }}>
      {children}
    </h2>
  );
};

export default Heading;
