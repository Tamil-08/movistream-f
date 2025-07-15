import React, { useState } from "react";
import './AdminLogin.css';
const Adminlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all details.");
      return;
    }

    // Add your authentication logic here (e.g., API call)
    if (email === "tam@t.com" && password === "tam") {
      alert("Login successful!");
      window.location.pathname = "/AdminDashboard"
      // You can store auth status in localStorage or navigate to a profile/dashboard
    } else {
      setError("Invalid username or password.");
    }
  };
  

  return (
    <div className="login" >
       <div className="login-bg" />
      <div className="login-box">
      <h2 className="text">Admin Login</h2>
      <form onSubmit={handleSubmit} >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        {error && <p>{error}</p>}
        <button type="submit" className="button">Login</button>
       <div className="options">
          
            <span>Need help?</span>
          </div>
        </form>
        <div className="signup-link">
          New to Moivstream? <a href="/Register">Sign up now</a>.
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
   
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    margin: 0,
  },
};


export default Adminlogin;
