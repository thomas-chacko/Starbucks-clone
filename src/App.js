import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Gift from "./pages/Gift.jsx";
import Order from "./pages/Order.jsx";
import Pay from "./pages/Pay.jsx";
import Store from "./pages/Store.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/order" element={<Order />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
