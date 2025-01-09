import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import Container from "react-bootstrap/Container";
import { ProductCard } from "../components";
import apiModule from "../utils/apiModule";

export default function Category() {
  const params = useParams();
  const { id } = params;
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["category", id],
    queryFn: ({ queryKey }) =>
      apiModule.fetchAllProductsFromCategory(queryKey[1]),
  });
  if (isPending) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <Container
      style={{ display: "flex", justifyContent: "center", columnGap: "20px" }}
    >
      {data.products.map((product, index) => (
        <ProductCard key={`${product.name}-${index}`} product={product} />
      ))}
    </Container>
  );
}
