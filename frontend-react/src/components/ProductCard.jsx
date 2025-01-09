import Card from "react-bootstrap/Card";
import { NavLink } from "react-router";
import PropTypes from "prop-types";

export default function ProductCard({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        style={{ height: "10rem", objectFit: "cover" }}
        src={`/src/assets/products/${product.imageFile}`}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <NavLink to={`/product/${product.id}`}>Fiche du produit</NavLink>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
