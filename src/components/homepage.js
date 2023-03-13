import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Links from "./contact";
import ProjectDescription from "./projectOneDesc";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;
export default function Projects({}) {
  return (
    <div id="homepage" className="homepage">
      <br />
      <h2 className="introduction">
        My name is Adrian and I am a passionate software dev and have recently
        completed my fullstack development course. As a web designer, I have a
        focus on creating professional and elegant designs while also
        implementing exceptional functionality.
      </h2>
      <div className="col">
        <br />
        <br />
        <h2 className="secondHeader">
          Here's what I built using HTML, CSS and Javascript
        </h2>
        <h2 className="project">Wild Slots</h2>
        <p className="desc font-weight-bold h5">
          A simple slot machine game I built using basic HTML and CSS
          <br />
          <Link to="/descriptionOne">Read More</Link>
        </p>
        <Link to="https://pages.git.generalassemb.ly/adrian0ng/WildSlots/">
          <button type="button" class="btn btn-info">
            Try it!
          </button>
        </Link>
        <br />
        <br />
        <br />
        <h2 className="secondHeader">
          Using EJS, Express and MongoDB, I created this website
        </h2>
        <h2 className="project">Property Reviewer</h2>
        <p className="desc font-weight-bold h5">
          A property reviewer site that allows you to post reviews on different
          properties. Built using EJS and MongoDB.
          <br />
          <Link to="/descriptionTwo">Read More</Link>
        </p>
        <Link to="https://property-reviewer.onrender.com">
          <button type="button" class="btn btn-info">
            Take a look!
          </button>
        </Link>
        <br />
        <br />
        <br />
        <h2 className="secondHeader">
          I created this full stack project using ReactJS and MongoDB
        </h2>
        <h2 className="project">Dan's List</h2>
        <p className="desc font-weight-bold h5">
          An E-commerce site where you can list and purchase items. Built using
          React and MongoDB.
          <br />
          <Link to="/descriptionThree">Read More</Link>
        </p>
        <Link to="https://dans-list.vercel.app/">
          <button type="button" class="btn btn-info">
            Check it Out!
          </button>
        </Link>
      </div>
      <br />
      <br />
    </div>
  );
}
