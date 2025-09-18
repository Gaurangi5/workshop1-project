import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email is not valid";
    }

    // Mobile number validation
    if (!mob.trim()) {
      newErrors.mob = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mob)) {
      newErrors.mob = "Mobile number must be 10 digits";
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    // If no errors, form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent successfully!");
      // Clear form
      setName("");
      setEmail("");
      setMob("");
      setMessage("");
      setErrors({});
    }
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setMob("");
    setMessage("");
    setErrors({});
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src="imgs/contacts.png" alt="Contact Us" className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h2 className="mb-4">Contact Us</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 ms-2">
              <label htmlFor="name" className="form-label">
                Enter your name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                id="name"
                placeholder="Enter name here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="off"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3 ms-2">
              <label htmlFor="email" className="form-label">
                Enter your email
              </label>
              <input
                type="text"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3 ms-2">
              <label htmlFor="mob" className="form-label">
                Enter your mobile number
              </label>
              <input
                type="text"
                className={`form-control ${errors.mob ? "is-invalid" : ""}`}
                id="mob"
                placeholder="Enter valid mobile number"
                value={mob}
                onChange={(e) => setMob(e.target.value)}
                autoComplete="off"
              />
              {errors.mob && <div className="invalid-feedback">{errors.mob}</div>}
            </div>

            <div className="mb-3 ms-2">
              <label htmlFor="message" className="form-label">
                Enter your message
              </label>
              <textarea
                id="message"
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary ms-2">
              Send
            </button>
            <button type="button" className="btn btn-secondary ms-2" onClick={handleClear}>
              Clear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
