import { createContext, useState } from "react";

const CartContext = createContext();
export const CartPovider = ({ children }) => {
  const [count, setCount] = useState(0);
  const addToCartCount = () => {
    setCount((prev) => prev + 1);
  };
  const removeFromCartCount = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const resetCartCount = () => setCount(0);
  const setCartCount = (num) => setCount(num);
  return (
    <CartContext.Provider
      value={{
        count,
        addToCartCount,
        removeFromCartCount,
        resetCartCount,
        setCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
