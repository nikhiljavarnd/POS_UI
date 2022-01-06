import {
  ADD_TO_TOPPINGMODAL,
  REMOVE_FROM_TOPPINGMODAL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_PIZZA_QTY,
} from "../types/cartTypes";

export const addToToppingModal = (pizza) => async (dispatch) => {
  dispatch({ type: ADD_TO_TOPPINGMODAL, payload: pizza });
};

export const removeFromToppingModal = () => async (dispatch) => {
  dispatch({ type: REMOVE_FROM_TOPPINGMODAL });
};

export const addToCart = (pizzaTopping) => async (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: pizzaTopping });
};

export const removeFromCart = (cartId) => async (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART, payload: cartId });
};

export const updatePizzaQty = (qty, cartId) => async (dispatch) => {
  dispatch({ type: UPDATE_PIZZA_QTY, qty, cartId });
};
