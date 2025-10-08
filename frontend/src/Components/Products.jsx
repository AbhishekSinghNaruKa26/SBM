import { useContext } from "react";
import { CategoryContext } from "../context/Categorycontext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import CartContext from "../context/CartContext";
function Products({ prodc }) {
  const { slectedCategory } = useContext(CategoryContext);
  const { addToCartCount } = useContext(CartContext);

  const navigate = useNavigate();
  const filterItems =
    slectedCategory === "all"
      ? prodc
      : prodc.filter(
          (items) => items.category.toLowerCase() === slectedCategory
        );
  const tempUserId = "6703bfb63b7bfcddf1f899aa";
  const handleAddTocart = async (product) => {
    try {
      await axios.post("http://localhost:8080/sbm/addtocart", {
        user: tempUserId,
        product: product,
      });
      console.log("Product added to cart!");
      addToCartCount();
    } catch (err) {
      alert("Error adding product to cart", err);
    }
  };
  return (
    <div className="my-8 sm:my-15 mx-auto w-full max-w-[1400px] shadow-2xl p-4  rounded-md">
      <h1 className="text-[25px] font-bold ml-5 md:ml-10 mb-5 tracking-widest py-3">
        Products
      </h1>

      {/* info of product */}
      <div className="gap-4 mx-auto overflow-x-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-10 max-w-[1400px] ">
        {filterItems.map((item, i) => (
          // Product and image details
          <div
            key={i}
            className=" max-w-[300px] max-h-[400px]    min-w-[120px] w-full mx-auto flex flex-col  justify-center items-center  group relative  rounded-md  whitespace-nowrap border-[2px] border-gray-400 hover:border-[2px] hover:border-black p-2"
          >
            {/* Images */}
            <div
              onClick={() => navigate("/products/cart")}
              className="w-full max-h-[50%]  object-cover overflow-hidden  relative mx-auto"
            >
              <img className="w-full h-auto " src={item.img} key={i} />
            </div>
            {/* Product details */}
            <div className="w-full h-auto flex flex-col max-h-[50%] space-y-1 p-2">
              <div className=" text-[15px] text-red-400  font-semibold text-left">
                {item.company}
              </div>
              <div
                onClick={() => navigate("/products/cart")}
                className="md:text-[15px] text-black font-semibold  truncate pb-2"
              >
                {" "}
                {item.name}
              </div>
              <div className="text-gray-400 text-[15px]">{item.rating}</div>
              <div>
                <span className="line-through pr-2 text-gray-400 ">
                  {item.orignal}
                </span>
                <span className="text-[15px] font-bold">{item.price}</span>
              </div>

              <button
                className="w-full mt-2 rounded-md p-2 text-white font-semibold bg-black hover:bg-red-700 transition duration-500 text-[15px] md:text-[15px]"
                onClick={() => handleAddTocart(item._id)}
              >
                <span>Add To Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
