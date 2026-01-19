function Token({ token }) {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>✅ Order Placed!</h1>
      <h2>Your Token Number</h2>
      <h1 style={{ fontSize: "60px" }}>{token}</h1>
      <p>Please wait while your order is being prepared.</p>
    </div>
  );
}

export default Token;
