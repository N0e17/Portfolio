import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Links from "./contact";

export default function ProjectThreeDesc() {
  return (
    <div>
      <div className="col">
        <br />
        <br />
        <h2 className="project">Dan's List</h2>
        <img
          src="../Danslist.png"
          alt="screenshot of project here"
          width={600}
          height={300}
        />
        <br />
        <br />
        <p className="desc font-weight-bold h5">
          An E-commerce site where you can list and purchase items. You can list
          new items with the name, price, quantity and description of the
          product. You can purchase items by adding items to the shopping cart.
          Built using React and MongoDB.
        </p>
        <br />
        <Link to="https://dans-list.vercel.app/">
          <button type="button" class="btn btn-info">
            Check it Out!
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
