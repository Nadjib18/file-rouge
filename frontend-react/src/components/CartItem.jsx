import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { increaseItem, decreaseItem, removeItem } from "../slices/cartSlice";

export default function CartItem({ product }) {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let cartItem = state.cartItems.find((item) => item.id === product.id);
  let unitPrice = cartItem.price;
  let itemPrice = cartItem.itemPrice;
  return (
    <div>
      <img
        src={`/src/assets/products/${product.imageFile}`}
        alt={product.name}
        style={{ width: "24px", height: "24px", objectFit: "cover" }}
      />
      <span>{product.name}</span>
      <button
        onClick={() => {
          dispatch(decreaseItem(product));
        }}
      >
        -
      </button>
      <span>{cartItem.quantity}</span>
      <button
        onClick={() => {
          dispatch(increaseItem(product));
        }}
      >
        +
      </button>
      <h4>Prix unitaire: {unitPrice}</h4>
      <h4>Prix: {itemPrice} euros</h4>
      <button
        onClick={() => {
          dispatch(removeItem(product));
        }}
      >
        Suprimer
      </button>
    </div>
  );
}

CartItem.propTypes = {
  product: PropTypes.object,
};
