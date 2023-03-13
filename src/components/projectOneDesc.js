import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Links from "./contact";

export default function ProjectOneDesc() {
  return (
    <div>
      <div className="col">
        <br />
        <br />
        <h2 className="project">Wild Slots</h2>
        <img
          src="../WildSlots.png"
          alt="screenshot of project here"
          width={600}
          height={300}
        />
        <br />
        <br />
        <p className="desc font-weight-bold h5">
          A simple slot machine game I built using basic HTML, CSS and
          Javascript. The game features a betting system and several different
          symbol combinations that dictate how much money the player earns. The
          player wins the game once they have earned a certain amount of money
          or hit a jackpot.
        </p>
        <br />
        <Link to="https://pages.git.generalassemb.ly/adrian0ng/WildSlots/">
          <button type="button" class="btn btn-info">
            Try It!
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
