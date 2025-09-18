import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <img
        src="imgs/404.png"
        alt="404 Not Found"
        className="img-fluid mb-3 no-style"
        style={{ maxWidth: "800px" }}
      />
      <Link to="/" className="btn btn-primary">
  Go back to Home
</Link>

    </div>
  );
}

export default PageNotFound;
