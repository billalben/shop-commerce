const Heading = ({className, children }: {className?: string, children: React.ReactNode }) => {
  return (
    <h2 className={`mb-3 ${className ?? ""}`} style={{ fontSize: "26px" }}>
      {children}
    </h2>
  );
};

export default Heading;
