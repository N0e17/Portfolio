import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Links from "./contact";

export default function ProjectFourDesc() {
  return (
    <div>
      <div className="col">
        <br />
        <br />
        <h2 className="project">Cat Adoption Website</h2>
        <img
          src="../AdoptionWebsite.png"
          alt="screenshot of project here"
          width={600}
          height={300}
        />
        <br />
        <br />
        <p className="desc font-weight-bold h5">
            A website I made using HTML, CSS and Javascript to showcase my web responsive design and API fetching methods.
            The page content shrinks to fit any screen such as mobile phones. When the "Browse More" button is clicked in the image gallery, it will load a new set of cat images randomly fetched from a cat image API.
        </p>
        <br />
        <Link to="https://cat-adoption-website.onrender.com">
          <button type="button" class="btn btn-info">
            Ta-da!
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