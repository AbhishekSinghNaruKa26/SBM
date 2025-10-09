import { createContext, useEffect, useState } from "react";

const CartContext = createContext();
export const CartPovider = ({ children }) => {
  const [count, setCount] = useState(0);
  // ✅ Load saved count from localStorage on refresh
  useEffect(() => {
    const savedCount = localStorage.getItem("cartCount");
    if (savedCount) setCount(Number(savedCount));
  }, []);

  const addToCartCount = () => {
    setCount((prev) => prev + 1);
    localStorage.setItem("cartCount", count + 1);
  };

  const removeFromCartCount = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
    localStorage.setItem("cartCount", count - 1);
  };

  const resetCartCount = () => {
    setCount(0);
    localStorage.setItem("cartCount", 0);
  };
  return (
    <CartContext.Provider
      value={{
        count,
        addToCartCount,
        removeFromCartCount,
        resetCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
