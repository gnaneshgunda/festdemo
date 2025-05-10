"use client";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

export default function Login() {
  const router = useRouter(); // Instantiate the router

  const handleLogin = () => {
    // Simulate a login action
    localStorage.setItem('userLoggedIn', 'true'); // Set to true to simulate login
    router.push('/profile'); // Use Next.js router to redirect to the profile page
  };

  return (
    <div id="login">
      <h1>Login</h1>
      <p>Welcome to the login page!</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

