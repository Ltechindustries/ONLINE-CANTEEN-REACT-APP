import "./User.css";
import { useNavigate } from "react-router-dom";

function User({ cart, setCart }) {
  const navigate = useNavigate();
  const count=0;
  const menuItems = [
    { id: 1, name: "Idli", price: 30 ,image:"idli.avif"},
    { id: 2, name: "Dosa", price: 50,image:"dosa.avif"},
    { id: 3, name: "Biriyani", price: 80,image:"biriyani.avif" },
    { id: 4, name: "Veg Meals", price: 100,image:"meals.avif" },
    { id: 5, name: "Tea", price: 15,image:"tea.avif" },
    { id: 6, name: "Coffee", price: 15,image:"Coffee.png"},
  ];
  const removefromCart=(itemr)=>{
    const index=cart.findIndex(item=>item.id===itemr.id);
    if(index !==-1){
      const newCart=[...cart];
      newCart.splice(index,1);
      setCart(newCart);
    }
  };
  const addToCart = (item) => {
    setCart([...cart, item]);
    
  };
  const getcount=(itemid)=>{
    return cart.filter(item=>item.id===itemid).length;
  };

  return ( 
    <div className="user-container">
       <div className="topnav">
       <p >🛒Cart: {cart.length}</p>

       </div>
      <h1>🍽️ Canteen Menu</h1>

      <div className="top-bar">
        <button onClick={() => navigate("/cart")}>
          Go to Cart
        </button>
      </div>
     
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img className="imgsty" src={item.image}></img>
          {/*<h3>{item.name}</h3>*/}
            <p>₹{item.price}</p>
            <button onClick={() => removefromCart(item) } style={{fontSize:"20px",fontWeight:"bold"}}>-</button>
            {getcount(item.id)}
            <button onClick={() => addToCart(item)} style={{fontSize:"20px",fontWeight:"bold"}}>
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
