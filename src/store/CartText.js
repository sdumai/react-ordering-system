import { createContext } from "react";

const CartText = createContext({
  meals: [],
  totalCount: 0,
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
});
export default CartText;
