import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  // console.log(cart)

  return (
    <div className="products" style={{ marginTop: 20 }}>
      <Col>
        <Link
          to={`/${prod.id}`}
        >
          <Card className="shadow">
            <Card.Img variant="top" src={prod.image} alt={prod.title} />
            <Card.Body>
              <Card.Title style={{ marginBottom: 0 }}>{prod.title}</Card.Title>
              <Card.Title as="h4" style={{ marginBottom: 8 }}>
                {prod.price.toFixed(2)} €
              </Card.Title>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Card.Subtitle>
                  <Rating rating={Math.round(prod.rating.rate / 2)} />
                </Card.Subtitle>
                <Card.Subtitle className="text-muted">
                  ({prod.rating.count})
                </Card.Subtitle>
              </div>
              <Card.Text
                style={{
                  maxWidth: "100%",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {prod.description}
              </Card.Text>
              <Card.Subtitle
                className="text-muted"
                style={{ marginTop: 10, marginBottom: 10, fontSize: 14 }}
              >
                {prod.category}
              </Card.Subtitle>

              {cart.some((p) => p.id === prod.id) ? (
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    });
                  }}
                >
                  Quitar del carrito
                </Button>
              ) : (
                <Button
                  variant="success"
                  style={{ width: "100%" }}
                  disabled={!prod.stock}
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: prod,
                    });
                  }}
                >
                  {prod.stock ? "Añadir al carrito" : "Sin stock"}
                </Button>
              )}
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </div>
  );
};

export default SingleProduct;
