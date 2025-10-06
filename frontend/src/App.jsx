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
import UserAccount from "./Account/UserAccount";
import Profile from "./Account/Profile";
import SaveAddress from "./Account/SaveAddress";
import PrivacyPolicy from "./Account/PrivacyPolicy";
import SelectLanguage from "./Account/SelectLanguage";
import Review from "./Account/Review";
import QuestionAndAnswer from "./Account/QuestionAndAnswer";
import HelpCenter from "./Account/HelpCenter";
import Contactus from "./Pages/Contactus";
import Aboutus from "./Pages/Aboutus";
import Orders from "./Orders/Orders";
import Order from "./Pages/Order";
import ScrollToTop from "./ScrollToTop";
import User from "../../admin/src/Pages/UserDetails";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />

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

          {/* Orders */}
          <Route
            path="/Order"
            element={
              <>
                <Orders />
              </>
            }
          ></Route>

          {/* Account */}

          <Route
            path="/Account"
            element={
              <>
                <UserAccount />
                <FiexdFooter />
              </>
            }
          ></Route>

          {/* Profile  */}
          <Route
            path="/Profile"
            element={
              <>
                <Profile />
              </>
            }
          ></Route>

          {/* Save Address */}
          <Route
            path="/Address"
            element={
              <>
                <SaveAddress />
              </>
            }
          ></Route>

          {/* Select Language */}
          <Route
            path="/Language"
            element={
              <>
                <SelectLanguage />
              </>
            }
          ></Route>

          {/* Privacy */}
          <Route
            path="/Privacy"
            element={
              <>
                <PrivacyPolicy />
              </>
            }
          ></Route>

          {/*My Review */}
          <Route
            path="/Review"
            element={
              <>
                <Review />
              </>
            }
          ></Route>

          {/* Question And Answer */}
          <Route
            path="/QueAndAns"
            element={
              <>
                <QuestionAndAnswer />
              </>
            }
          ></Route>

          {/* Help Center */}
          <Route
            path="/Help"
            element={
              <>
                <HelpCenter />
              </>
            }
          ></Route>

          {/* amar---- */}
          <Route
            path="/products"
            element={
              <>
                <Header />
                <Product />
                <FiexdFooter />
                <Footer />
              </>
            }
          />

          {/* Products Cart */}
          <Route
            path="/products/cart"
            element={
              <>
                <Header />
                <Productcart />
                <FiexdFooter />
                <Footer />
              </>
            }
          />

          {/* Contact */}
          <Route
            path="/contact-us"
            element={
              <>
                <Header />
                <Contactus />
                <FiexdFooter />
                <Footer />
              </>
            }
          />

          {/* About us */}
          <Route
            path="/about-us"
            element={
              <>
                <Header />
                <Aboutus />
                <FiexdFooter />
                <Footer />
              </>
            }
          />

          {/* Address Payment */}
          <Route path="/products/cart/address" element={<Addresspayment />} />

          {/* Order */}
          <Route path="/orders" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
