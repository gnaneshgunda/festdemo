"use client";
import "../styles/navbar.css";
import Link from "next/link";
import { useState,useEffect } from "react";



export default function Navbar() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('userLoggedIn', 'false');
        }
      }, []);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
  // This simulates checking the login status (e.g., from localStorage, an API, etc.)
  useEffect(() => {
    const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true'; // Check login status
    setIsLoggedIn(userLoggedIn);
  }, []);

  const handleLogin = () => {
    // Simulate login by setting login status in localStorage
    localStorage.setItem('userLoggedIn', 'true'); // Set to true to simulate login
    setIsLoggedIn(true); // Update state
  };

  const handleLogout = () => {
    // Simulate logout by clearing login status from localStorage
    localStorage.setItem('userLoggedIn', 'false'); // Set to false to simulate logout
    setIsLoggedIn(false); // Update state
  };


    return (
        <nav id="navbar">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aMCiIMct-kDocBzuwdaACU3euRd7C2kbXQ&s" alt="Space Fest Logo" />
            <h1>Space Fest</h1>
            <div id="navbar-links">
                <Link href="/">Home</Link>
                <Link href="/Schedule">Schedule</Link>
                <Link href="/teams">Teams</Link>
                {(!isLoggedIn) &&(
                    <Link href="/login">Login</Link>)
            }
                {isLoggedIn && (<Link href="/profile">Profile</Link>)}
                
            </div>    
        </nav>
    );
}





