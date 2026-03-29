import { useState } from "react";
import "./User.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function User({ cart, setCart }) {
  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);

  const menuItems = [
    { id: 1, name: "Idli", price: 30, image: "idli.avif" },
    { id: 2, name: "Dosa", price: 50, image: "dosa.avif" },
    { id: 3, name: "Biriyani", price: 110, image: "biriyani.avif" },
    { id: 4, name: "Veg Meals", price: 100, image: "meals.avif" },
    { id: 5, name: "Tea", price: 15, image: "tea.avif" },
    { id: 6, name: "Coffee", price: 15, image: "Coffee.png" },
  ];

  const removeFromCart = (itemToRemove) => {
    const index = cart.findIndex((item) => item.id === itemToRemove.id);

    if (index === -1) {
      return;
    }

    const nextCart = [...cart];
    nextCart.splice(index, 1);
    setCart(nextCart);
  };

  const addToCart = (itemToAdd) => {
    setCart([...cart, itemToAdd]);
  };

  const getCount = (itemId) => {
    return cart.filter((item) => item.id === itemId).length;
  };

  return (
    <div className="user-container">
      <div className="topnav">
        <h1>Canteen Menu</h1>
        <p>Cart: {cart.length}</p>
      </div>

      <div className="top-bar">
        <button onClick={() => navigate("/cart")}>Go to Cart</button>
      </div>

      <motion.div
        className="menu-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            className="menu-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: item.id * 0.3,
              ease: "easeOut",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img className="imgsty" src={item.image} alt={item.name} />
            <p>Rs. {item.price}</p>

            <button
              onClick={() => removeFromCart(item)}
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              -
            </button>

            {getCount(item.id)}

            <button
              onClick={() => addToCart(item)}
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              +
            </button>
          </motion.div>
        ))}
      </motion.div>

      <button className="fab" onClick={() => setShowQR(true)}>
        Donate
      </button>

      {showQR && (
        <div className="qr-overlay">
          <div className="qr-box">
            <h2>Scan and Support</h2>
            <img src="upi.jpeg" alt="UPI QR" className="qr-img" />
            <p>Scan using any UPI app</p>
            <button onClick={() => setShowQR(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
    
  );
}

export default User;
