import { useQuery } from "@tanstack/react-query";
import Container from "react-bootstrap/Container";

import apiModule from "../utils/apiModule";
import { ProductList } from "../components";

export default function Home() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: apiModule.fetchAllProducts,
  });
  if (isPending) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <Container fluid>
      <h1>Work in progress React</h1>
      <ProductList products={data} />
    </Container>
  );
}
