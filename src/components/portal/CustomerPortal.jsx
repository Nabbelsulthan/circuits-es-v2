


// import "./CustomerPortal.css";
// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { API_URL } from "../Config/Config";


// export default function CustomerPortal() {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loggingIn, setLoggingIn] =
//     useState(false);


//   const [error, setError] = useState("");
//   useEffect(() => {
//     const isLoggedIn =
//       localStorage.getItem("isLoggedIn");

//     if (isLoggedIn) {
//       navigate("/ces-connect");
//     }
//   }, [navigate]);



//   const handleLogin =
//     async (e) => {

//       e.preventDefault();

//       setError("");

//       if (!username || !password) {

//         setError(
//           "Please fill all fields."
//         );

//         return;

//       }

//       setLoggingIn(true);

//       try {

//         const response =
//           await fetch(
//             `${API_URL}/api/customer-auth/login`,
//             {
//               method: "POST",

//               headers: {
//                 "Content-Type":
//                   "application/json",
//               },

//               body: JSON.stringify({
//                 username,
//                 password,
//               }),
//             }
//           );

//         const data =
//           await response.json();

//         if (response.ok) {

//           localStorage.setItem(
//             "token",
//             data.token
//           );

//           localStorage.setItem(
//             "customerId",
//             data.customerId
//           );

//           localStorage.setItem(
//             "customerName",
//             data.companyName
//           );

//           localStorage.setItem(
//             "isLoggedIn",
//             "true"
//           );

//           navigate("/ces-connect");

//         } else {

//           setError(data.message);

//           setLoggingIn(false);

//         }

//       } catch (error) {

//         console.error(error);

//         setError("Server Error");

//         setLoggingIn(false);

//       }

//     };

//   return (
//     <div className="portal-page">
//       <div className="portal-overlay"></div>

//       <div className="portal-container">

//         <div className="portal-info">



//           <h1>CES Connect</h1>

//           <h2>Customer Portal</h2>

//           <p>
//             Welcome to the secure customer portal for
//             monitoring project progress, drawings,
//             FAT reports and dispatch updates.
//           </p>

//           <div className="portal-features">
//             <div>✓ Project Tracking</div>
//             <div>✓ FAT Reports</div>
//             <div>✓ Drawings & Documents</div>
//             <div>✓ Dispatch Updates</div>
//           </div>

//         </div>

//         <div className="portal-card">



//           <div className="secure-badge">
//             SECURE ACCESS
//           </div>

//           <h3 className="login-title">
//             <LockOutlinedIcon />
//             Customer Login
//           </h3>

//           <p>
//             Sign in to access your projects.
//           </p>

//           <form onSubmit={handleLogin}>



//             <div className="form-group">
//               <label>Username</label>
//               <input
//                 type="text"
//                 placeholder="Enter your username"
//                 value={username}
//                 disabled={loggingIn}
//                 autoFocus
//                 onChange={(e) => {

//                   setUsername(e.target.value);

//                   setError("");

//                 }}
//               />
//             </div>

//             <div className="form-group">
//               <label>Password</label>

//               <div className="password-wrapper">

//                 <input
//                   type={
//                     showPassword
//                       ? "text"
//                       : "password"
//                   }
//                   placeholder="Enter your password"
//                   value={password}
//                   disabled={loggingIn}
//                   onChange={(e) => {

//                     setPassword(e.target.value);

//                     setError("");

//                   }}
//                 />

//                 <button
//                   type="button"
//                   className="password-toggle"
//                   disabled={loggingIn}
//                   onClick={() =>
//                     setShowPassword(
//                       !showPassword
//                     )
//                   }
//                 >
//                   {showPassword ? (
//                     <VisibilityOffIcon />
//                   ) : (
//                     <VisibilityIcon />
//                   )}
//                 </button>

//               </div>

//             </div>

//             {error && (
//               <div className="login-error">
//                 {error}
//               </div>
//             )}

//             <button
//               type="submit"
//               className="login-btn"
//               disabled={loggingIn}
//             >

//               {loggingIn ? (

//                 <>

//                   <span className="button-spinner"></span>

//                   Connecting to CES Connect...

//                 </>

//               ) : (

//                 "Login to CES Connect"

//               )}

//             </button>

//           </form>

//           <div className="portal-help">
//             Need Access?
//             <a href="/contact">
//               Contact CircuitsES
//             </a>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }



import "./CustomerPortal.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { API_URL } from "../Config/Config";

export default function CustomerPortal() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [error, setError] = useState("");

  /* =========================================
     CHECK EXISTING LOGIN
  ========================================= */

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      navigate("/ces-connect", { replace: true });
    }
  }, [navigate]);

  /* =========================================
     LOGIN
  ========================================= */

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");

    if (!username.trim() || !password) {
      setError("Please fill all fields.");
      return;
    }

    setLoggingIn(true);

    try {
      const response = await fetch(
        `${API_URL}/api/customer-auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username.trim(),
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("customerId", data.customerId);
        localStorage.setItem("customerName", data.companyName);
        localStorage.setItem("isLoggedIn", "true");

        navigate("/ces-connect", { replace: true });
      } else {
        setError(data?.message || "Invalid username or password.");
        setLoggingIn(false);
      }
    } catch (error) {
      console.error("CES Connect login error:", error);

      setError(
        "Unable to connect to CES Connect. Please try again."
      );

      setLoggingIn(false);
    }
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <main className="ces-connect-portal">
      <div className="ces-connect-portal__overlay"></div>

      <div className="ces-connect-portal__container">

        {/* =====================================
            PORTAL INFORMATION
        ===================================== */}

        <section className="ces-connect-portal__info">

          <div className="ces-connect-portal__brand">
            <span className="ces-connect-portal__brand-label">
              CIRCUITS ENERGY SYSTEM
            </span>

            <h1>CES Connect</h1>

            <h2>Customer Portal</h2>
          </div>

          <p className="ces-connect-portal__description">
            Welcome to the secure customer portal for
            monitoring project progress, drawings,
            FAT reports and dispatch updates.
          </p>

          <div className="ces-connect-portal__features">

            <div className="ces-connect-portal__feature">
              <span>✓</span>
              <span>Project Tracking</span>
            </div>

            <div className="ces-connect-portal__feature">
              <span>✓</span>
              <span>FAT Reports</span>
            </div>

            <div className="ces-connect-portal__feature">
              <span>✓</span>
              <span>Drawings &amp; Documents</span>
            </div>

            <div className="ces-connect-portal__feature">
              <span>✓</span>
              <span>Dispatch Updates</span>
            </div>

          </div>

        </section>

        {/* =====================================
            LOGIN CARD
        ===================================== */}

        <section className="ces-connect-portal__card">

          <div className="ces-connect-portal__secure-badge">
            SECURE ACCESS
          </div>

          <div className="ces-connect-portal__login-heading">

            <div className="ces-connect-portal__login-icon">
              <LockOutlinedIcon />
            </div>

            <div>
              <h3>Customer Login</h3>

              <p>
                Sign in to access your projects.
              </p>
            </div>

          </div>

          <form
            className="ces-connect-portal__form"
            onSubmit={handleLogin}
          >

            {/* =================================
                USERNAME
            ================================= */}

            <div className="ces-connect-portal__form-group">

              <label htmlFor="ces-connect-username">
                Username
              </label>

              <input
                id="ces-connect-username"
                type="text"
                placeholder="Enter your username"
                value={username}
                disabled={loggingIn}
                autoFocus
                autoComplete="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
              />

            </div>

            {/* =================================
                PASSWORD
            ================================= */}

            <div className="ces-connect-portal__form-group">

              <label htmlFor="ces-connect-password">
                Password
              </label>

              <div className="ces-connect-portal__password-wrapper">

                <input
                  id="ces-connect-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  disabled={loggingIn}
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                />

                <button
                  type="button"
                  className="ces-connect-portal__password-toggle"
                  disabled={loggingIn}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  onClick={() =>
                    setShowPassword((previous) => !previous)
                  }
                >
                  {showPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </button>

              </div>

            </div>

            {/* =================================
                ERROR
            ================================= */}

            {error && (
              <div
                className="ces-connect-portal__error"
                role="alert"
              >
                {error}
              </div>
            )}

            {/* =================================
                LOGIN BUTTON
            ================================= */}

            <button
              type="submit"
              className="ces-connect-portal__login-button"
              disabled={loggingIn}
            >
              {loggingIn ? (
                <>
                  <span
                    className="ces-connect-portal__spinner"
                    aria-hidden="true"
                  />

                  <span>
                    Connecting to CES Connect...
                  </span>
                </>
              ) : (
                "Login to CES Connect"
              )}
            </button>

          </form>

          {/* ===================================
              HELP
          =================================== */}

          <div className="ces-connect-portal__help">

            <span>Need Access?</span>

            <button
              type="button"
              onClick={() => navigate("/contact")}
            >
              Contact CircuitsES
            </button>

          </div>

        </section>

      </div>
    </main>
  );
}