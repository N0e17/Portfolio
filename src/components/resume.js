import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Biography from "./biography";
import { Layout, Menu, theme } from "antd";

export default function Resume({}) {
  return (
    <div class="bio">
      <h2 class="secondHeader text-left">Resume</h2>
      <br />
      <p class="desc font-weight-bold text-left h5">
        I have experience in working with popular languages like Javascript and
        Python as well as libraries like ReactJs. I have also worked with
        databases such as MongoDB and MYSQL. I am able to do both frontend and
        backend development.
      </p>
      <br />
      <h3 class="project text-left">Download</h3>
      <p class="desc font-weight-bold text-left h5">
        You may download my full resume here
      </p>
      <ul class="desc font-weight-bold text-left h5">
        <li>
          <Link to="https://docs.google.com/document/d/1BTwKUd4Wu1tPDC7kUud9YYucChSUzDwF/edit?usp=sharing&ouid=111646399589082217945&rtpof=true&sd=true">
            Resume
          </Link>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link class="desc font-weight-bold text-left h5" to="/">
        Back to Home
      </Link>
    </div>
  );
}
