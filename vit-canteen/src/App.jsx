import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hp from "./Home.jsx";
import User from "./User.jsx";
import Cart from "./Cart.jsx";
import Admin from "./Admin.jsx";
import Token from "./Token.jsx";
import OrderStatus from "./OrderStatus.jsx";
import Rating from "./Rating.jsx";

function App() {
  const [cart, setCart] = useState([]);

  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const [currentToken, setCurrentToken] = useState(() => {
    const savedToken = localStorage.getItem("currentToken");
    return savedToken ? JSON.parse(savedToken) : null;
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("currentToken", JSON.stringify(currentToken));
  }, [currentToken]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hp />} />

        <Route
          path="/user"
          element={<User cart={cart} setCart={setCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              orders={orders}
              setOrders={setOrders}
              setCurrentToken={setCurrentToken}
            />
          }
        />

        <Route
          path="/token"
          element={<Token token={currentToken} />}
        />

        <Route
          path="/status"
          element={
            <OrderStatus
              token={currentToken}
              orders={orders}
            />
          }
        />

        <Route
          path="/admin"
          element={<Admin orders={orders} setOrders={setOrders} />}
        />
        <Route
          path="/rating"
          element={<Rating />}
        />

      </Routes>
    </Router>
  );
}

export default App;
