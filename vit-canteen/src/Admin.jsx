import "./Admin.css";

function Admin({ orders, setOrders }) {
  const totalOrders = orders.length;

const completedOrders = orders.filter(
  (o) => o.status === "Ready"
).length;

const pendingOrders = orders.filter(
  (o) => o.status !== "Ready"
).length;

// Optional (if you have payment later)
const paidOrders = orders.filter(
  (o) => o.payment === "Paid"
).length;
  const markAsReady = (token) => {
    const updatedOrders = orders.map((order) =>
      order.token === token
        ? { ...order, status: "Ready" }
        : order
    );

    setOrders(updatedOrders);
  };

  return (
    <div className="admin-container">
      <h1>📋 Admin Dashboard</h1>
      <div className="dashboard-summary">
  <div className="card">
    📦 Total Orders
    <h2>{totalOrders}</h2>
  </div>

  <div className="card">
    ✅ Completed
    <h2>{completedOrders}</h2>
  </div>

  <div className="card">
    ⏳ Pending
    <h2>{pendingOrders}</h2>
  </div>

  <div className="card">
    💳 Payments
    <h2>{paidOrders || 0}</h2>
  </div>
</div>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        
        <table>
          <thead>
            <tr>
              <th>Token</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.token}>
                <td>{order.token}</td>
                <td>{order.items.join(", ")}</td>
                <td>₹{order.total}</td>
                <td
                  className={
                    order.status === "Ready"
                      ? "ready"
                      : "pending"
                  }
                >
                  {order.status}
                </td>
                <td>
                  {order.status === "Pending" && (
                    <button
                      onClick={() => markAsReady(order.token)}
                    >
                      Mark Ready
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;
