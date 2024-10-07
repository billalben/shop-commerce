import { TCategory } from "@/types";
import { Link } from "react-router-dom";

function Category({ title, img, prefix }: TCategory) {
  return (
    <Link to={`/categories/products/${prefix}`} className="text-center group">
      <img
        src={img}
        className="mx-auto rounded-full max-h-44 max-w-44 group-hover:shadow-lg"
        alt={title}
      />
      <h4 className="mt-3 text-lg group-hover:underline">{title}</h4>
    </Link>
  );
}

export default Category;
