import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";
import OrderDetail from "./Orders/OrderDetail";
import PaymentScreen from "./Payment/Payment";
import FulFillment from "./FulFillment/FulFilment";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };
  return (
    <Router>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Team One</Link>
          </div>
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/payment">Payment</Link>
            <Link to="/fulfillment">FulFillment</Link>
          </div>
        </header>
      </div>
      <aside className="sidebar">
        Shopping Categories
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <Link to="/">Pants</Link>
          </li>
          <li>
            <Link to="/">Shirts</Link>
          </li>
        </ul>
      </aside>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Products />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/order/:id" element={<OrderDetail />}></Route>
          <Route path="/payment" element={<PaymentScreen />}></Route>
          <Route path="/fulfillment" element={<FulFillment />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
