import React from "react";
import "../css/Error.css";

const Error = ({ err, show = true }) => {
  const handlePageLoadError = () => {
    window.location.reload();
  };
  return (
    <div>
      <div className="err">ERROR::{err}</div>
      <button
        style={{ display: show ? "block" : "none" }}
        className="reload"
        onClick={handlePageLoadError}
      >
        Reload Page
      </button>
    </div>
  );
};

export default Error;
