import "./OrderStatus.css";
import { useNavigate } from "react-router-dom";

function OrderStatus({ token, orders }) {
  const navigate = useNavigate();
  const order = orders.find((o) => o.token === token);

  if (!order) {
    return <h2 style={{ textAlign: "center" }}>No order found</h2>;
  }

  return (
    <div className="status-container">
      <h1>Order Status</h1>

      <div className="status-card">
        <h2>Token: {order.token}</h2>

        <p>
          <b>Items:</b> {order.items.join(", ")}
        </p>

        <p>
          <b>Total:</b> Rs. {order.total}
        </p>

        <button
          className="rate-button"
          onClick={() => navigate("/rating")}
          type="button"
        >
          Rate Your Experience
        </button>

        <p className={order.status === "Ready" ? "ready" : "pending"}>
          <b>Status:</b> {order.status}
        </p>
      </div>
    </div>
  );
}

export default OrderStatus;
