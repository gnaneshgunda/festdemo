
"use client";

import { useRouter } from "next/navigation"; // Import useRouter from Next.js

export default function Profile() {
  const router = useRouter(); // Instantiate the router

  const handleLogout = () => {
    // Simulate logout by clearing login status from localStorage
    localStorage.setItem('userLoggedIn', 'false'); // Set to false to simulate logout
    router.push('/'); // Use Next.js router to redirect to the home page
  };

  return (
    <div id="profile">
      <h1>Profile</h1>
      <p>Welcome to the profile page!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
