import { useContext } from "react";
import { CategoryContext } from "../context/Categorycontext";
import { Link } from "react-router-dom";

function Products({ prodc }) {
  const { slectedCategory } = useContext(CategoryContext);
  const filterItems =
    slectedCategory === "all"
      ? prodc
      : prodc.filter(
          (items) => items.category.toLowerCase() === slectedCategory
        );
  return (
    <div className="mt-5 mx-auto w-full max-w-[1400px] shadow-2xl my-5 rounded-md">
      <h1 className="text-[25px] font-bold ml-5 md:ml-10 mb-5 tracking-widest py-3">
        Products
      </h1>
      <div className="gap-2 mx-auto overflow-x-auto grid grid-cols-2 md:grid-cols-3 space-y-10 max-w-[1400px] ">
        {filterItems.map((item, i) => (
          <div className="w-[140px] min-w-[180px] sm:w-[200px] md:w-[230px] lg:w-[250px] h-[300px] md:h-[340px] flex flex-col  justify-center items-center  group relative  rounded-md mx-auto whitespace-nowrap border-[2px] border-gray-400 hover:border-[2px] hover:border-black p-2">
            <div className="w-full h-[50%] object-cover overflow-hidden  relative mx-auto">
              <img src={item.img} key={i} />
            </div>
            <div className="w-full h-[50%] flex flex-col space-y-1 p-2">
              <div className=" text-[15px] text-red-400  font-semibold text-left">
                {item.company}
              </div>
              <div className="md:text-[15px] text-black font-semibold">
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
              <Link to={"/products/cart"}>
                <button className="w-full rounded-md p-1 text-white font-semibold bg-black hover:bg-red-700 transition duration-500 text-[10px] md:text-[15px]">
                  BUY IT NOW
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
