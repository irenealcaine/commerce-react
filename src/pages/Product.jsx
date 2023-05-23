import { Link, useParams } from "react-router-dom";
import { products } from "../data/store.js";
import { Container, Button } from "react-bootstrap";
import { CartState } from "../context/Context";

const Product = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));


  const {
    state: { cart },
    dispatch,
  } = CartState();


  return (
    <div className="product">
      <Container className="container-fluid" style={{ padding: "15px" }}>
        <Button variant="info" ><Link to="/" >Atrás</Link></Button>
        <div class="row" style={{ marginTop: "30px" }}>
          <div class="col-12 col-md-4">
            <img className="img-fluid" src={product.image} alt={product.title} />
          </div>
          <div class="col-12 col-md-8">
            <p>{product.category}</p>
            <h1 className="display-3">{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.rating.rate}/10</p>
            <p>{product.rating.count} ventas</p>
            <p>{product.price} €</p>
            <p>{product.stock ? "en stock" : "sin stock"}</p>
            {cart.some((p) => p.id === product.id) ? (
              <Button
                variant="danger"
                style={{ width: "100%" }}
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  });
                }}
              >
                Quitar del carrito
              </Button>
            ) : (
              <Button
                variant="success"
                style={{ width: "100%" }}
                disabled={!product.stock}
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  });
                }}
              >
                {product.stock ? "Añadir al carrito" : "Sin stock"}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div >
  );
};

export default Product;
