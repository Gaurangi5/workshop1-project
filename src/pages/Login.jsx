import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    // Email/Username validation
    if (!email.trim()) {
      newErrors.email = "Email or username is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      // Optional: If you want to allow usernames too, skip this check
      newErrors.email = "Email is not valid";
    }

    // Password validation
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login successful!");
      // Navigate to dashboard or home page
      navigate("/dashboard"); 
    }
  };

  const handleClear = () => {
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src="imgs/login.png" alt="Login" className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h2 className="mb-4">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 ms-2">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3 ms-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

            <button type="submit" className="btn btn-primary ms-2">
              Login
            </button>
            <button type="button" className="btn btn-secondary ms-2" onClick={handleClear}>
              Clear
            </button>

            <div className="mt-3">
              Don't have an account? <a href="/register">Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
