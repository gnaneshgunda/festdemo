
// "use client";

// import { useRouter } from "next/navigation"; // Import useRouter from Next.js

// export default function Profile() {
//   const router = useRouter(); // Instantiate the router

//   const handleLogout = () => {
//     // Simulate logout by clearing login status from localStorage
//     localStorage.setItem('userLoggedIn', 'false'); // Set to false to simulate logout
//     router.push('/'); // Use Next.js router to redirect to the home page
//   };

//   return (
//     <div id="profile">
//       <h1>Profile</h1>
//       <p>Welcome to the profile page!</p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../styles/profile.css";

export default function Profile() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    bio: "Space enthusiast exploring the cosmos",
    favoriteEvents: ["Mars Exploration Panel", "Astronomy Workshop", "Space Art Exhibition"],
    registeredEvents: ["Rocket Science Lecture", "Space Photography Workshop"],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({name: "", email: "", bio: ""});

  useEffect(() => {
    // Check if the user is logged in
    if (typeof window !== "undefined") {
      const isLoggedIn = localStorage.getItem("userLoggedIn") === "true";
      if (!isLoggedIn) {
        router.push("/login");
        return;
      }

      // Get user data from localStorage
      const userName = localStorage.getItem("userName") || "Space Explorer";
      const userEmail = localStorage.getItem("userEmail") || "explorer@spacefest.com";

      setUserData(prev => ({
        ...prev,
        name: userName,
        email: userEmail
      }));
      
      setEditData({
        name: userName,
        email: userEmail,
        bio: "Space enthusiast exploring the cosmos"
      });
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.setItem("userLoggedIn", "false");
    router.push("/");
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Save the changes
      setUserData({
        ...userData,
        name: editData.name,
        email: editData.email,
        bio: editData.bio
      });

      // In a real app, you would send this data to your backend
      localStorage.setItem("userName", editData.name);
      localStorage.setItem("userEmail", editData.email);
    } else {
      // Start editing
      setEditData({
        name: userData.name,
        email: userData.email,
        bio: userData.bio
      });
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value
    });
  };


  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          <span>{userData.name ? userData.name.charAt(0).toUpperCase() : "U"}</span>
        </div>
        <div className="profile-title">
          <h1>My Space Profile</h1>
          <p>Manage your account and preferences</p>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-card user-info">
          <div className="card-header">
            <h2>Personal Information</h2>
            <button 
              className={`edit-button ${isEditing ? "save-button" : ""}`}
              onClick={handleEditToggle}
            >
              {isEditing ? "Save Changes" : "Edit Profile"}
            </button>
          </div>

          {isEditing ? (
            <form className="edit-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea
                  name="bio"
                  value={editData.bio} 
                  onChange={handleChange}
                  rows={3}
                ></textarea>
              </div>
            </form>
          ) : (
            <div className="user-details">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">{userData.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{userData.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Bio:</span>
                <span className="detail-value">{userData.bio}</span>
              </div>
            </div>
          )}
        </div>

        <div className="profile-card events-section">
          <h2>My Space Events</h2>
          <div className="events-container">
            <div className="events-column">
              <h3>Favorite Events</h3>
              <ul className="events-list">
                {userData.favoriteEvents.map((event, index) => (
                  <li key={`fav-${index}`} className="event-item">
                    <span className="event-name">{event}</span>
                    {/* <button className="event-action">Remove</button> */}
                    <button 
                      className="event-action" 
                      onClick={() => {
                        setUserData(prev => ({
                          ...prev,
                          favoriteEvents: prev.favoriteEvents.filter((_, i) => i !== index)
                        }));
                      }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="events-column">
              <h3>Registered Events</h3>
              <ul className="events-list">
                {userData.registeredEvents.map((event, index) => (
                  <li key={`reg-${index}`} className="event-item">
                    <span className="event-name">{event}</span>
                    <button className="event-action view">View Details</button>
                  </li>
                ))}
              </ul>
              <button className="browse-events-btn">Browse More Events</button>
            </div>
          </div>
        </div>

        <div className="profile-card account-actions">
          <h2>Account Settings</h2>
          <div className="account-buttons">
            <button className="account-btn change-password">Change Password</button>
            <button className="account-btn notifications">Notification Settings</button>
            <button className="account-btn privacy">Privacy Settings</button>
            <button className="account-btn logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}