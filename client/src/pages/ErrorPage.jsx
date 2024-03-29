import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error__page">
      <div className="center">
        <h3 className="h3 primary">Page Not Found</h3>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
