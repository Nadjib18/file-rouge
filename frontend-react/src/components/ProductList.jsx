import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <Container style={{ display: "flex", columnGap: "20px" }}>
      {products.map((product, index) => (
        <ProductCard key={`${product.name}-${index}`} product={product} />
      ))}
    </Container>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
