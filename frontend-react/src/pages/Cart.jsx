import { useSelector, useDispatch } from "react-redux";
//import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { deleteCart } from "../slices/cartSlice";
import { CartItem } from "../components";
import apiModule from "../utils/apiModule";

export default function Cart() {
  let state = useSelector((state) => state.cart);
  //let navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: apiModule.postOrder,
    onSuccess: (response) => {
      console.log("Commande effectuée: ", response.data);
      //TODO
      //navigate("/checkout");
    },
    onError: (error) => console.log(error, error.message),
  });
  let cartItems = state.cartItems;
  let subTotal = state.subTotal;
  const shippingPrice = state.shippingPrice;
  let total = state.total;
  const dispatch = useDispatch();

  function handleCheckout() {
    //console.log(state);
    mutation.mutate({ orderDetail: state });
  }

  if (cartItems.length === 0) {
    return <h1>Panier vide</h1>;
  }
  return (
    <div>
      <div>
        {cartItems.map((cartItem) => (
          <CartItem
            key={`${cartItem.name}-${cartItem.id}`}
            product={cartItem}
          />
        ))}
      </div>
      <h3>Sous-Total: {subTotal} euros</h3>
      <h3>Frais: {shippingPrice} euros</h3>
      <h2>Total: {total} euros</h2>
      <button onClick={() => dispatch(deleteCart())}>
        Supprimer le panier
      </button>
      <button onClick={handleCheckout}>Payer</button>
    </div>
  );
}
