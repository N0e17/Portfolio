import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Biography() {
  return (
    <div class="bio">
      <br />
      <h2 class="secondHeader text-left">Biography</h2>
      <br />
      <h3 class="project text-left">About Me</h3>
      <p class="desc font-weight-bold text-left h5">
        I am passionate about software and web development and am always
        interested in learning new languages and frameworks to improve my skills
        and discover new tools I can utilize. I am excited about the infinite
        potential for growth in technology. I believe great eye catching web
        design is essential to any successful project.
      </p>
      <br />
      <h4 class="project text-left">Experience in using. . </h4>
      <ul class="desc font-weight-bold text-left h5">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React JS</li>
        <li>Boostrap CSS</li>
        <li>MongoDB</li>
        <li>MYSQL</li>
      </ul>
      <br />
      <h4 class="project text-left">Relevant Links</h4>
      <ul class="desc font-weight-bold text-left h5">
        <li>
          <Link to="https://github.com/N0e17">My Github</Link>
        </li>
      </ul>
      <br />
      <Link class="desc font-weight-bold text-left h5" to="/">
        Back to Home
      </Link>
    </div>
  );
}
