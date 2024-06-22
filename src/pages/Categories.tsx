import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import GridList from "@components/common/GridList/GridList";
import { TCategory } from "@customTypes/category";

function Categories() {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <Loading loading={loading} error={error}>
      <GridList<TCategory>
        records={records}
        renderItem={(record) => <Category {...record} />}
      />
    </Loading>
  );
}

export default Categories;
