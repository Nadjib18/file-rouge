import { useQuery } from "@tanstack/react-query";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import apiModule from "../utils/apiModule";
import "./NavigationBar.css";

export default function NavigationBar() {
  let state = useSelector((state) => state.cart);
  let totalQuantity = state.totalQuantity;
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: apiModule.fetchAllCategories,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <header>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", columnGap: "10px" }}>
          <div>
            <NavLink to="/">WIP</NavLink>
          </div>
          <div>
            <NavLink to="/">Accueil</NavLink>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Catégories &#x25BC;</button>
            <div className="dropdown-content">
              {data.map((category, index) => (
                <NavLink
                  key={`${category.name}-${index}`}
                  to={`/category/${category.id}`}
                  className="droplink"
                >
                  {category.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div>
          <NavLink to="/cart">
            Panier{" "}
            {totalQuantity > 0 && <Badge bg="secondary">{totalQuantity}</Badge>}
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
