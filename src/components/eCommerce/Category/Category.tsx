import { TCategory } from "@types";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Category({ title, img, prefix }: TCategory) {
  return (
    <Link
      to={`/categories/products/${prefix}`}
      className="text-center link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
    >
      <div className="">
        <img src={img} className={styles.categoryImg} alt={title} />
      </div>
      <h4 className="fs-5 mt-3">{title}</h4>
    </Link>
  );
}

export default Category;
