import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import LoginFrom from "./components/LoginPopup/LoginFrom";

function App() {
  const [isLoginPupupShow, setIsLoginPupupShow] = useState(false);
  return (
    <>
      {isLoginPupupShow ? (
        <LoginFrom setIsLoginPupupShow={setIsLoginPupupShow} />
      ) : (
        <></>
      )}

      <div className="w-5/6 mx-auto">
        <Navbar setIsLoginPupupShow={setIsLoginPupupShow} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
