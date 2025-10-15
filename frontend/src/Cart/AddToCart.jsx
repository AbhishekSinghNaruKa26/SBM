import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import CartContext from "../context/CartContext";

const AddToCart = () => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState({});
  const [open, setOpen] = useState(true);
  const { removeFromCartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleIncreaseCount = (id) => {
    setCount((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const handleDecreaseCount = (id) => {
    setCount((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };
  const tempUserId = "6703bfb63b7bfcddf1f899aa";
  const getcart = async (user = tempUserId) => {
    const res = await axios.get(`https://sbm-qz7p.onrender.com/sbm/getcart/${user}`);
    setCart(res.data.cart?.items || []);
  };
  const handleremove = async (product) => {
    await axios.delete("https://sbm-qz7p.onrender.com/sbm/removecart", {
      data: { user: tempUserId, product: product },
    });
    removeFromCartCount();
    getcart();
  };
  useEffect(() => {
    getcart();
  }, []);
  return (
    <div className="mt-3 mb-12 p-3 max-w-[1300px]  w-full mx-auto  ">
      {/*1 About Product */}

      {/* My cart And button */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-4 fixed top-0  bg-white w-full h-16"
      >
        <button className="text-[19px]">
          <HiOutlineArrowLeft />
        </button>
        <span className="text-[18px]">My Cart</span>
      </div>

      {/* Enter Delivery Pincode */}
      <div className="flex justify-between items-center text-[14px]  gap-4 mt-16 shadow-2xl p-5">
        <h1 className="font-semibold">From Saved Adderess</h1>
        <button className="text-blue-600 px-4 py-0.5 border rounded whitespace-nowrap">
          Enter Delivery Pincode
        </button>
      </div>

      <div className="md:flex justify-between gap-3">
        {/* Product Details */}

        <div className="mt-6 shadow-2xl  py-4 space-y-8 max-w-[750px] w-full h-screen overflow-y-auto">
          {/* image and product details */}
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-[300px] text-center text-gray-500">
              <img
                src="emptycart.png"
                alt="Empty Cart"
                className="w-[120px] mb-3"
              />
              <h2 className="text-[20px] font-semibold">Your cart is empty</h2>
              <p className="text-[14px] text-gray-400 mt-1">
                Add some products to see them here.
              </p>
              <button
                onClick={() => navigate("/products")}
                className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-red-700 transition-all"
              >
                Shop Now
              </button>
            </div>
          ) : (
            cart.map((product, index) => (
              <div key={index} className="mt-4 shadow-2xl p-3">
                {/* Attaraction Line */}
                <div className="bg-green-200 mb-3 w-fit px-2 text-[12px] py-0.5">
                  <span className="text-green-800">
                    Lowest Price in the year
                  </span>
                </div>

                <div className="flex gap-7">
                  {/* Image */}
                  <div className="">
                    <div>
                      <img
                        className="w-[80px] h-[80px]"
                        src={product.product?.img}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center gap-2 border w-fit p-1 rounded mt-2 text-[14px] ml-1">
                      <span>
                        Qty: {count[product.product._id] || product.quantity}
                      </span>

                      <span>
                        <IoMdArrowDropup
                          onClick={() => handleIncreaseCount(product._id)}
                        />{" "}
                        <IoMdArrowDropdown
                          onClick={() => handleDecreaseCount([product._id])}
                        />
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <div className="text-[18px] font-semibold ">
                      {product.product?.name}
                    </div>
                    <div className="text-gray-800">250gm</div>
                    <div className="text-[12px] mt-1">
                      {product.product?.rating}
                    </div>
                    <div className="mt-1 text-gray-700 flex items-center gap-2 font-semibold">
                      <span className="line-through text-[15px] ">
                        {product.product?.price}
                      </span>{" "}
                      <span className="text-[20px]">
                        {product.product?.orignal}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img className="h-[13px] w-[40px]" src="wow.png" alt="" />{" "}
                      <span className="text-blue-800 text-sm">Buy at ₹399</span>
                    </div>
                  </div>
                </div>

                {/* Delivery Date Update */}
                <div className="mt-3 px-3 text-sm">
                  <h1>Delivery by Sep25, Wed</h1>
                </div>

                {/* Remove Or Buy It Now */}

                <div className="flex justify-between gap-5 max-w-full w-full mx-auto px-2 mt-4">
                  <div className="w-full flex justify-center bg-black text-white rounded">
                    <button className="relative group w-full py-2">
                      <div className="relative hover:text-white z-10">
                        Buy It Now
                      </div>
                      <div className="absolute left-0 top-0 h-full w-0 bg-red-700 transition-all duration-500 group-hover:w-full"></div>
                    </button>
                  </div>

                  <div
                    className="flex rounded items-center w-full justify-center bg-gray-500 text-white"
                    onClick={() => handleremove(product.product._id)}
                  >
                    <button className="relative group w-full flex items-center justify-center hover:text-white py-2 gap-2">
                      <span className="realative z-10">
                        <RiDeleteBin6Line />
                      </span>{" "}
                      <span className="relative z-10">Remove</span>
                      <span className="absolute top-0 left-0 h-full w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/*2 About Cart Total  */}
        <div className="mt-7 shadow-2xl p-3 max-w-[490px] w-full mx-auto max-h-[450px] overflow-y-auto ">
          {/* Heading */}
          <div
            onClick={() => setOpen(!open)}
            className="flex justify-between items-center pb-2 border-b-2 border-gray-300"
          >
            <div>Price Deatils</div>
            <div>
              <MdKeyboardArrowUp />
            </div>
          </div>

          {/* prices */}
          <div
            className={`border-b-2 border-gray-300 pb-3 space-y-2 ${
              open === false ? "hidden" : "visible"
            }`}
          >
            {/* Total Price */}
            <div className="flex justify-between mt-2">
              <div>Price (3 items)</div>
              <div> ₹12,033</div>
            </div>

            {/* Dicount */}
            <div className="flex justify-between">
              <div>Discount </div>
              <div> -₹7,033</div>
            </div>

            {/* Buy More And Save More */}
            <div className="flex justify-between">
              <div>Buy More And Save More</div>
              <div>-₹44 </div>
            </div>

            {/* Coupons for you */}
            <div className="flex justify-between">
              <div>Coupons for you</div>
              <div> -₹44</div>
            </div>

            {/* Coupons for you */}
            <div className="flex justify-between">
              <div>Platform Fee</div>
              <div> ₹7</div>
            </div>
          </div>

          {/* SubTotal */}
          <div className="flex justify-between mt-3">
            <div>Total Amount</div>
            <div>₹4,520</div>
          </div>

          {/* Total Savings */}
          <div className="flex justify-center mt-4 bg-green-200 rounded text-green-800 py-1 gap-1">
            <div>
              <img className="h-[16px] w-[16px]" src="saving.png" alt="" />
            </div>
            <div>You'll save ₹7,978 on this order !</div>
          </div>
        </div>
      </div>

      {/*3 safe and secure  */}
      <div className="max-w-[480px] w-full mx-auto">
        <div className="flex text-gray-500 gap-0.5 text-sm text-center items-center my-6">
          <img className="w-[26px] h-[32px]" src="verify.png" alt="" />
          <p>
            Safe and secure payments. Easy returns. 100% Authenticate products
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
