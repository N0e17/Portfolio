import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Links from "./contact";

export default function ProjectTwoDesc() {
  return (
    <div>
      <div className="col">
        <br />
        <br />
        <h2 className="project">Property Reviewer</h2>
        <img
          src="../PropertyReviewer.png"
          alt="screenshot of project here"
          width={600}
          height={300}
        />
        <br />
        <br />
        <p className="desc font-weight-bold h5">
          A property reviewer site that allows you to post reviews on different
          properties. The site allows users to post reviews with a picture and
          descriptions of the property along with their review. The site also
          allows users to post comments. Built using EJS and MongoDB.
        </p>
        <br />
        <Link to="https://property-reviewer.onrender.com">
          <button type="button" class="btn btn-info">
            Take a look!
          </button>
        </Link>
      </div>
      <br />
      <Link className="home font-weight-bold h5" to="/">
        Back to Home
      </Link>
    </div>
  );
}
