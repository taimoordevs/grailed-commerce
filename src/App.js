import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./screens/home";
import Navbar from "./components/navbar";
import ContactUs from "./screens/contactUs";
import Footer from "./components/footer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProductDetails from "./screens/productDetails";
import ForYou from "./screens/forYou";
import Shop from "./screens/shop";
import Accessibility from "./screens/accessibility";
import DesignersDetails from "./screens/designersDetails";
import Sells from "./screens/sells";
import NewListing from "./screens/sells/newListing";
import Favorites from "./screens/Favorites";
import MyProfile from "./screens/users/myProfile";
import Users from "./screens/users";
import Address from "./screens/users/address";
import Purchases from "./screens/users/purchases";
import ForSale from "./screens/sells/ForSale/ForSale";
import FeedBack from "./screens/sells/FeedBack";
import Payments from "./screens/users/payments";
import Categories from "./screens/Categories";
import Checkout from "./screens/checkout";
import Stores from "./screens/Stores";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./routes/PrivateRoute";
import PageNotFound from "./screens/pageNotFound";
import Login from "./screens/auth/login";
import Register from "./screens/auth/register";
import SubCategories from "./screens/SubCategories";
import Designers from "./screens/designers";
function App() {
  // const stripePromise = loadStripe(
  //   "pk_test_51Nl1DZLyjJv6hHKiePantjZ9Kub3Dak6aCkgrPctWNnunThpuHIp5PDlnSZPpfBfxIHuNGNEljHGDOOnUPwccjXb00LwCaIiTm"
  // );

  return (
    <>
      {/* <Elements stripe={stripePromise}> */}
        <ToastContainer />

        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/product_details/:id" element={<ProductDetails />} />
          <Route path="/" element={<PrivateRoute />}>
          <Route path="/for_you" element={<ForYou />} />
          </Route>
          
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/designers" element={<Designers />} />
          <Route path="/designers_details/:id" element={<DesignersDetails />} />
          <Route path="/sells" element={<Sells />} />
          <Route path="/new_listing" element={<NewListing />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/categories/:id" element={<Categories />} />
          <Route path="/sub_categories/:id" element={<SubCategories />} />
          <Route path="/*" element={<PageNotFound />} />

          <Route path="/stores" element={<Stores />} />

          <Route path="/users" element={<Users />}>
            <Route path="my_profile" element={<MyProfile />} />
            <Route path="address" element={<Address />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="payments" element={<Payments />} />
          </Route>

          <Route path="/sell" element={<Sells />}>
            <Route path="for_sale" element={<ForSale />} />
            <Route path="feed_back" element={<FeedBack />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      {/* </Elements> */}
    </>
  );
}

export default App;
