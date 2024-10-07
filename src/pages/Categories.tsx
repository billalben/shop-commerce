import { Category } from "@/components/eCommerce";
import { Loading } from "@/components/feedback";
import GridList from "@/components/common/GridList/GridList";
import { TCategory } from "@/types";
import { Heading } from "@/components/common";
import useCategories from "@/hooks/useCategories";

const Categories = () => {
  const { loading, error, records } = useCategories();

  return (
    <>
      <Heading title="Categories" />
      <Loading status={loading} error={error} type="category">
        <GridList<TCategory>
          records={records}
          renderItem={(record) => <Category {...record} />}
          emptyMessage="There are no categories"
        />
      </Loading>
    </>
  );
};

export default Categories;
