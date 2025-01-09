import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/cartSlice";
import apiModule from "../utils/apiModule";

export default function Product() {
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["products", id],
    queryFn: ({ queryKey }) => apiModule.fetchSingleProduct(queryKey[1]),
  });
  const decrementCounter = () => {
    setCounter((counter) => {
      if (counter > 1) {
        return counter - 1;
      } else {
        return counter;
      }
    });
  };
  const incrementCounter = () => {
    setCounter((counter) => counter + 1);
  };
  if (isPending) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <h1>{data.name}</h1>
      <img
        src={`/src/assets/products/${data.imageFile}`}
        alt={data.name}
        style={{ width: "800px", height: "450px", objectFit: "cover" }}
      />
      <p>{data.description}</p>
      <i>{data.price} euros</i>
      <br />
      <button onClick={decrementCounter}>-</button>
      <span>{counter}</span>
      <button onClick={incrementCounter}>+</button>
      <button
        onClick={() => {
          dispatch(addItem({ ...data, quantity: counter }));
        }}
      >
        Ajouter au panier
      </button>
    </div>
  );
}
