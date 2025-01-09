const cartModule = (() => {
  function setTotalQuantity(cartItems) {
    const totalQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
    return totalQuantity;
  }

  function setCartItemPrice(cartItem) {
    const unitPrice = +cartItem.price;
    const itemPrice = cartItem.quantity * unitPrice;

    return itemPrice.toFixed(2);
  }

  function setSubTotalPrice(cartItems) {
    let cartPrice = 0.0;
    if (cartItems.length > 0) {
      cartPrice = cartItems.reduce(
        (acc, cur) => acc + cur.quantity * +cur.price,
        0
      );
    }
    return cartPrice.toFixed(2);
  }

  function setTotalPrice(state) {
    let total = +setSubTotalPrice(state.cartItems) + state.shippingPrice;
    return total.toFixed(2);
  }

  function addItemToCart(state, action) {
    let itemInCart = state.cartItems.find(
      (item) => item.id === action.payload.id
    );
    if (itemInCart) {
      itemInCart.quantity += action.payload.quantity;
      itemInCart.totalPrice = setCartItemPrice(itemInCart);
    } else {
      itemInCart = action.payload;
      itemInCart.itemPrice = setCartItemPrice(itemInCart);
      state.cartItems.push(itemInCart);
    }
    state.totalQuantity = setTotalQuantity(state.cartItems);
    state.subTotal = setSubTotalPrice(state.cartItems);
    state.total = setTotalPrice(state);
  }

  function incrementItem(state, action) {
    const itemInCart = state.cartItems.find(
      (item) => item.id === action.payload.id
    );
    if (itemInCart) {
      itemInCart.quantity += 1;
      itemInCart.itemPrice = setCartItemPrice(itemInCart);
      state.totalQuantity = setTotalQuantity(state.cartItems);
      state.subTotal = setSubTotalPrice(state.cartItems);
      state.total = setTotalPrice(state);
    }
  }

  function decrementItem(state, action) {
    const itemInCart = state.cartItems.find(
      (item) => item.id === action.payload.id
    );
    if (itemInCart.quantity > 1) {
      itemInCart.quantity -= 1;
      itemInCart.itemPrice = setCartItemPrice(itemInCart);
      state.totalQuantity = setTotalQuantity(state.cartItems);
      state.subTotal = setSubTotalPrice(state.cartItems);
      state.total = setTotalPrice(state);
    }
  }

  function deleteItem(state, action) {
    state.cartItems = state.cartItems.filter(
      (item) => item.id !== action.payload.id
    );
    state.totalQuantity = setTotalQuantity(state.cartItems);
    state.subTotal = setSubTotalPrice(state.cartItems);
    state.total = setTotalPrice(state);
  }

  function deleteCart(state) {
    state.cartItems = [];
    state.totalQuantity = 0;
    state.subTotal = "0.00";
    state.total = "0.00";
  }

  return {
    addItemToCart,
    incrementItem,
    decrementItem,
    deleteItem,
    deleteCart,
  };
})();

export default cartModule;
