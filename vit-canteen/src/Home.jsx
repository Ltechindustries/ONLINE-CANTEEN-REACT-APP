import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Food from "./foodan.json";
import "./Home.css";
import Lottie from "lottie-react";

function HomePage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = () => {
    if (username && password) {
      navigate("/user");
    } else {
      alert("Please enter username and password");
    }
  };

  const mosef=(x)=>{
    x.target.style.backgroundColor="black";
  }

  const moseof=(x)=>{
    x.target.style.backgroundColor="orange";
  }

  const handleAdminLogin = () => {
    if (username === "admin" && password === "admin123") {
      navigate("/admin");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    
    <div className="layout" style={{ height:'100%' }}>
      <Lottie animationData={Food} />
    <tr className="trs">
    <div className="home-container">
      <img src="/wplogo.png" style={{height:100,width:100}}></img>
      <h1>VIT CANTEEN APP</h1>
      <h2>Welcome</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button id="u1" onClick={handleUserLogin} onMouseOver={mosef} onMouseOut={moseof}>User Login</button>
      <button id="u2" onClick={handleAdminLogin}onMouseOver={mosef} onMouseOut={moseof}>Admin Login</button>
      
    </div>
    </tr>
    
    </div>
    

  );
}

export default HomePage;
