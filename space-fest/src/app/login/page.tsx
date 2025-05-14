// "use client";
// import { useRouter } from "next/navigation"; // Import useRouter from Next.js

// export default function Login() {
//   const router = useRouter(); // Instantiate the router

//   const handleLogin = () => {
//     // Simulate a login action
//     localStorage.setItem('userLoggedIn', 'true'); // Set to true to simulate login
//     router.push('/profile'); // Use Next.js router to redirect to the profile page
//   };

//   return (
//     <div id="login">
//       <h1>Login</h1>
//       <p>Welcome to the login page!</p>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../styles/auth.css";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    // In a real app, you would validate credentials with a backend
    // This is a simple simulation
    
    let user=""
    const existingCustomers = JSON.parse(localStorage.getItem("existingCustomers") || "[]");

    const customer = existingCustomers.find(
      (cust) => ((cust.email === formData.email && cust.password === formData.password))
    );

    if (!customer) {
      setError("Invalid email or password");
      return;
    }
   user=customer.username 
    localStorage.setItem("userLoggedIn", "true");
    localStorage.setItem("userEmail", formData.email);
    localStorage.setItem("userName", user);
    // Redirect to profile page
    // router.push("/profile");
    router.replace("/profile");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Welcome Back!</h1>
          <p>Sign in to continue your space journey</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{" "}
            <Link href="/signup" className="auth-link-text">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      
      
    </div>
  );
}

