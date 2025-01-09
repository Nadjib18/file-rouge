import { Routes, Route } from "react-router";
import Container from "react-bootstrap/Container";
import { Home, Category, Product, Cart, Checkout, Layout } from "./pages";
import { NavigationBar } from "./components";
import "./App.css";

function App() {
  return (
    <Container style={{ minHeight: "100vh" }}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="category/:id" element={<Category />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
