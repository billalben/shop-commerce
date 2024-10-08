import ContentLoader from "react-content-loader";

const CategorySkeleton = () => {
  const skeletons = Array.from({ length: 4 }, (_, idx) => (
    <div key={idx} className="flex justify-center p-2">
      <ContentLoader
        speed={2}
        width={200}
        height={200}
        viewBox="0 0 200 200"
        backgroundColor="#f0f0f0"
        foregroundColor="#d6d6d6"
      >
        <rect x="61" y="179" rx="3" ry="3" width="86" height="8" />
        <circle cx="104" cy="84" r="84" />
      </ContentLoader>
    </div>
  ));

  return (
    <div className="grid justify-center gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {skeletons}
    </div>
  );
};

export default CategorySkeleton;
