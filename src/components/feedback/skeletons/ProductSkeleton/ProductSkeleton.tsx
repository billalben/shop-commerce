import ContentLoader from "react-content-loader";

const ProductSkeleton = () => {
  const skeletons = Array.from({ length: 3 }, (_, idx) => (
    <div key={idx} className="flex justify-center p-2">
      <ContentLoader
        speed={2}
        width={190}
        height={300}
        viewBox="0 0 190 300"
        backgroundColor="#f0f0f0"
        foregroundColor="#d6d6d6"
      >
        <rect x="32" y="179" rx="3" ry="3" width="105" height="8" />
        <rect x="31" y="4" rx="0" ry="0" width="119" height="162" />
        <rect x="32" y="199" rx="3" ry="3" width="86" height="9" />
        <rect x="32" y="220" rx="3" ry="3" width="86" height="9" />
        <rect x="31" y="239" rx="0" ry="0" width="118" height="22" />
      </ContentLoader>
    </div>
  ));

  return (
    <div className="grid justify-center gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {skeletons}
    </div>
  );
};

export default ProductSkeleton;
