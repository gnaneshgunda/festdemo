

// "use client";
// import "../styles/navbar.css";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();
  
//   // Check login status when the component mounts
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const checkLoginStatus = () => {
//         const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
//         setIsLoggedIn(userLoggedIn);
//       };
      
//       checkLoginStatus();
      
//       // Set up an interval to check login status
//       const interval = setInterval(checkLoginStatus, 1000);
      
//       return () => clearInterval(interval);
//     }
//   }, []);

 

//   return (
//     <nav id="navbar">
//       {/* <div className="navbar-brand"> */}
//         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aMCiIMct-kDocBzuwdaACU3euRd7C2kbXQ&s" alt="Space Fest Logo" />
//         <h1>Space Fest</h1>
//       {/* </div> */}
//       <div id="navbar-links">
//         <Link href="/">Home</Link>
//         <Link href="/Schedule">Schedule</Link>
//         <Link href="/teams">Teams</Link>
//         {!isLoggedIn ? (
//           <>
//             <Link href="/login" className="auth-link">Login</Link>
//             <Link href="/signup" className="auth-link signup">Sign Up</Link>
//           </>
//         ) : (
//           <>
//             <Link href="/profile" className="auth-link">Profile</Link>
//           </>
//         )}
//       </div>    
//     </nav>
//   );
// }



"use client";
import "../styles/navbar1.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  
  // Check login status when the component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkLoginStatus = () => {
        const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
        setIsLoggedIn(userLoggedIn);
      };
      
      checkLoginStatus();
      
      // Set up an interval to check login status
      const interval = setInterval(checkLoginStatus, 1000);
      
      return () => clearInterval(interval);
    }
  }, []);

  // Handle menu toggle
  const toggleMenu = () => {
    console.log("Menu toggle clicked");
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest('#mobile-navbar-links') && !e.target.closest('.hamburger-menu')) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    // Add escape key handler
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  return (
    <nav id="navbar">
      <div className="navbar-brand">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aMCiIMct-kDocBzuwdaACU3euRd7C2kbXQ&s" alt="Space Fest Logo" />
        <h1>Space Fest</h1>
      </div>

      {/* Desktop navigation */}
      <div id="navbar-links" className="desktop-nav">
        <Link href="/">Home</Link>
        <Link href="/Schedule">Schedule</Link>
        <Link href="/teams">Teams</Link>
        {!isLoggedIn ? (
          <>
            <Link href="/login" className="auth-link">Login</Link>
            <Link href="/signup" className="auth-link signup">Sign Up</Link>
          </>
        ) : (
          <>
            <Link href="/profile" className="auth-link">Profile</Link>
          </>
        )}
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="hamburger-menu" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger-line ${menuOpen ? 'open' : ''}`}></div>
      </button>
      
      {/* Mobile navigation */}
      <div id="mobile-navbar-links" className={menuOpen ? 'open' : ''}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/Schedule" onClick={() => setMenuOpen(false)}>Schedule</Link>
        <Link href="/teams" onClick={() => setMenuOpen(false)}>Teams</Link>
        {!isLoggedIn ? (
          <>
            <Link href="/login" className="auth-link" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link href="/signup" className="auth-link signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
          </>
        ) : (
          <>
            <Link href="/profile" className="auth-link" onClick={() => setMenuOpen(false)}>Profile</Link>
          </>
        )}
      </div>    
    </nav>
  );
}