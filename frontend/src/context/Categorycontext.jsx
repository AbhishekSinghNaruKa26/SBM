import { createContext, useState } from "react";

const CategoryContext = createContext();
const CategoryProvider = ({ children }) => {
  const [slectedCategory, setSlectedCategory] = useState("all");
  return (
    <CategoryContext.Provider value={{ slectedCategory, setSlectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
export { CategoryContext, CategoryProvider };
