import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart, orders, setOrders, setCurrentToken }) {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = () => {
    if (cart.length === 0) return;

    const token = Math.floor(100 + Math.random() * 900);

    const newOrder = {
      token: token,
      items: cart.map((item) => item.name),
      status: "Pending",
      total: total,
    };

    setOrders([...orders, newOrder]);
    setCurrentToken(token);
    setCart([]);

    navigate("/status");
  };

  return (
    <div className="cart-container">
      <h1>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>

          <h2>Total: ₹{total}</h2>

          <button className="place-order" onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}

      <button onClick={() => navigate("/user")}>
        Back to Menu
      </button>
    </div>
  );
}

export default Cart;
