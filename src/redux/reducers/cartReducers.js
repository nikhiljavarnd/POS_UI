import {
  ADD_TO_TOPPINGMODAL,
  REMOVE_FROM_TOPPINGMODAL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_PIZZA_QTY,
} from "../types/authTypes";

function toppingModalReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_TOPPINGMODAL:
      return {
        ...state,
        pizza: action.payload,
      };
    case REMOVE_FROM_TOPPINGMODAL:
      return {
        ...state,
        pizza: {},
      };
    default:
      return state;
  }
}

function cartReducer(state = { cartArray: [] }, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartArray: state.cartArray.push(action.payload),
      };

    case REMOVE_FROM_CART:
      const removePizza = (state, action) => {
        const { cartArray } = state;

        const deleteIndex = cartArray.findIndex((cart) => {
          return cart.cartId === action.payload;
        });

        const updatedCart =
          deleteIndex === -1 ? cartArray : cartArray.splice(deleteIndex, 1);

        return updatedCart;
      };

      return {
        ...state,
        cartArray: removePizza(state, action),
      };

    case UPDATE_PIZZA_QTY:
      const updateQtyPizza = (state, action) => {
        const { cartArray } = state;

        const updatedCart = cartArray.map((cart) => {
          if (cart.cartId === action.cartId) {
            cart.qty = action.qty;
          }

          return cart;
        });

        return updatedCart;
      };

      return {
        ...state,
        cartArray: updateQtyPizza(state, action),
      };

    default:
      return state;
  }
}

export { toppingModalReducer, cartReducer };
