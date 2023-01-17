import React from "react";
import { Link } from "react-router-dom";
import PagePanel from "../components/PagePanel";
import "../css/Error.css";

const Error = () => {
  document.title = "Yummy Cusine | Page not Found";
  return (
    <PagePanel>
      <main className="error-page">
        <div>
          <img src="../error-404.webp" alt="Page does not exist" />
          <p>
            Oops, bad timing! We're also looking for this page.
            <br />
            Please leave a note when you find it.
          </p>
          <Link to="/">
            <button className="reload">Back Home</button>
          </Link>
        </div>
      </main>
    </PagePanel>
  );
};

export default Error;
