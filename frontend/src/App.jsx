import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Main from "./Components/Main";
import LoginRegister from "./Auth/LoginRegister";
import AddToCart from "./Cart/AddToCart";
import WishList from "./wishlist/WishList";
import Search from "./search/Search";
import FiexdFooter from "./Footer/FiexdFooter";
//amar---------
import Product from "./Pages/Product";
import Productcart from "./Pages/Productcart";
import Addresspayment from "./Pages/Addresspayment";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Main />
                <FiexdFooter />
                <Footer />
              </>
            }
          ></Route>

          {/* Login */}
          <Route
            path="/RegisterLogin"
            element={
              <>
                <Header />
                <LoginRegister />
                <FiexdFooter />
              </>
            }
          ></Route>

          {/* WishList */}
          <Route
            path="/WishList"
            element={
              <>
                <Header />
                <WishList />
                <FiexdFooter />
                <Footer />
              </>
            }
          ></Route>

          {/* Add To Cart */}
          <Route
            path="/AddTocart"
            element={
              <>
                <AddToCart />
                <FiexdFooter />
              </>
            }
          ></Route>

          {/* Search */}
          <Route
            path="/Search"
            element={
              <>
                <Header />
                <Search />
                <FiexdFooter />
              </>
            }
          ></Route>
          {/* amar---- */}
          <Route path="/products" element={<Product />} />
          <Route path="/products/cart" element={<Productcart />} />
          <Route path="/products/cart/address" element={<Addresspayment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
