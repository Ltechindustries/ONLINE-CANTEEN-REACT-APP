import "./Admin.css";

function Admin({ orders, setOrders }) {
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
