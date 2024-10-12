import ContentLoader from "react-content-loader";

const ProductSkeleton = () => {
  const skeletons = Array.from({ length: 3 }, (_, idx) => (
    <ContentLoader
      key={idx}
      speed={2}
      width={304}
      height={454}
      viewBox="0 0 304 454"
      backgroundColor="#f0f0f0"
      foregroundColor="#d6d6d6"
    >
      <rect x="0" y="0" rx="10" ry="10" width="302" height="288" />
      <rect x="10" y="297" rx="10" ry="10" width="277" height="14" />
      <rect x="10" y="325" rx="10" ry="10" width="156" height="14" />
      <rect x="10" y="349" rx="10" ry="10" width="156" height="14" />
      <rect x="10" y="398" rx="10" ry="10" width="133" height="36" />
    </ContentLoader>
  ));

  return (
    <div className="grid justify-center gap-2 overflow-hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {skeletons}
    </div>
  );
};

export default ProductSkeleton;
