// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import "../styles/auth.css";

// export default function Signup() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     e.preventDefault();
//     setError("");

//     // Basic validation
//     if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
//       setError("Please fill in all fields");
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match");
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }



//     const existingCustomers = JSON.parse(localStorage.getItem("existingCustomers") || "[]");
//     // Check if the email is already present in the existing customers
//     const isExistingCustomer = existingCustomers.some(
//         (customer) => customer.email === formData.email
//     );

//     if (isExistingCustomer) {
//         setError("You are already a customer");
//         return;
//     }

//     // In a real app, you would send this data to your backend
//     // This is a simple simulation
//     localStorage.setItem("userLoggedIn", "true");
//     localStorage.setItem("userName", formData.name);
//     localStorage.setItem("userEmail", formData.email);
//     // Add emails of existing customers to local storage
   
//     existingCustomers.push({"email":formData.email,"password":formData.password,"username":formData.name});
//     localStorage.setItem("existingCustomers", JSON.stringify(existingCustomers));
    
//     // Redirect to profile page
//     // router.push("/profile");
//     router.replace("/profile");
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card-signup signup-card">
//         <div className="auth-header">
//           <h1>Join Space Fest!</h1>
//           <p>Create an account to start your cosmic adventure</p>
//         </div>

//         {error && <div className="auth-error">{error}</div>}

//         <form onSubmit={handleSubmit} className="auth-form">
//           <div className="form-group">
//             <label htmlFor="name">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your full name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Create a password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               placeholder="Confirm your password"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="terms-checkbox">
//             <input type="checkbox" id="terms" required />
//             <label htmlFor="terms">
//               I agree to the <a href="#">Terms of Service</a> and{" "}
//               <a href="#">Privacy Policy</a>
//             </label>
//           </div>

//           <button type="submit" className="auth-button">
//             Create Account
//           </button>
//         </form>

//         <div className="auth-footer">
//           <p>
//             Already have an account?{" "}
//             <Link href="/login" className="auth-link-text">
//               Log In
//             </Link>
//           </p>
//         </div>
//       </div>
      
      
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../styles/auth.css";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Define a type for customer data
    interface Customer {
      email: string;
      password: string;
      username: string;
    }
    
    const existingCustomers: Customer[] = JSON.parse(localStorage.getItem("existingCustomers") || "[]");
    // Check if the email is already present in the existing customers
    const isExistingCustomer = existingCustomers.some(
        (customer: Customer) => customer.email === formData.email
    );

    if (isExistingCustomer) {
        setError("You are already a customer");
        return;
    }

    // In a real app, you would send this data to your backend
    // This is a simple simulation
    localStorage.setItem("userLoggedIn", "true");
    localStorage.setItem("userName", formData.name);
    localStorage.setItem("userEmail", formData.email);
    // Add emails of existing customers to local storage
   
    existingCustomers.push({email: formData.email, password: formData.password, username: formData.name});
    localStorage.setItem("existingCustomers", JSON.stringify(existingCustomers));
    
    // Redirect to profile page
    // router.push("/profile");
    router.replace("/profile");
  };

  return (
    <div className="auth-container">
      <div className="auth-card-signup signup-card">
        <div className="auth-header">
          <h1>Join Space Fest!</h1>
          <p>Create an account to start your cosmic adventure</p>
        </div>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className="terms-checkbox">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="auth-button">
            Create Account
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="auth-link-text">
              Log In
            </Link>
          </p>
        </div>
      </div>
      
      
    </div>
  );
}