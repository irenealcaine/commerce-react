import { useParams } from "react-router-dom";
import { products } from "../data/store.js";

const Product = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div className="product">
      <span className="title">{product.title}</span>
      <img src={product.image} alt={product.title} />
    </div>
  );
};

export default Product;
