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
import TermsAndPolicy from "./Account/TermsAndPolicy";
import HelpCenter from "./Account/HelpCenter";

import Contactus from "./Pages/Contactus";
import Aboutus from "./Pages/Aboutus";
import Orders from "./Pages/Orders";

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

          {/* Account */}
          <Route
            path="/Account"
            element={
              <>
                <UserAccount />
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

          {/* Terms , Policy */}
          <Route
            path="/Terms"
            element={
              <>
                <TermsAndPolicy />
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

          {/* amar-- Product */}

          <Route
            path="/products"
            element={
              <>
                <Header />
                <Product />
                <Footer />
              </>
            }
          />

          {/* Product - cart */}
          <Route
            path="/products/cart"
            element={
              <>
                <Header />
                <Productcart />
                <Footer />
              </>
            }
          />

          {/* amar---- */}
          <Route
            path="/products"
            element={
              <>
                <Header />
                <Product />
                <Footer />
              </>
            }
          />

          <Route
            path="/products/cart"
            element={
              <>
                <Header />
                <Productcart />
                <Footer />
              </>
            }
          />

          <Route
            path="/contact-us"
            element={
              <>
                <Header />
                <Contactus />
                <Footer />
              </>
            }
          />
          <Route
            path="/about-us"
            element={
              <>
                <Header />
                <Aboutus />
                <Footer />
              </>
            }
          />

          <Route path="/products/cart/address" element={<Addresspayment />} />
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
