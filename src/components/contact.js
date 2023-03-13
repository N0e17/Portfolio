import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Biography from "./biography";
import { Layout, Menu, theme } from "antd";

export default function Contact({}) {
  const [contact, setContact] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = contact;
    fetch("http://localhost:3009/contacts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //update list of people
    console.log("Submit: ", data);
  };

  const handleChange = (event) => {
    const newFormValue = {
      ...contact,
      [event.target.name]: event.target.value,
    };
    console.log(contact);
    setContact(newFormValue);
    //console.log(newForm) //updating state as i type inputs
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="bio">
      <h2 className="secondHeader text-left">Contact Me</h2>
      <br />
      <p class="desc font-weight-bold text-left h5">
        Leave your email or a message for me and I will get back to you as soon
        as possible.
      </p>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" class="desc font-weight-bold text-left h5">
          Name:
        </label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={contact.name}
        />
        <br />
        <br />
        <label htmlFor="email" class="desc font-weight-bold text-left h5">
          Email:
        </label>
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={contact.email}
        />
        <br />
        <br />
        <label htmlFor="message" class="desc font-weight-bold text-left h5">
          Message:
        </label>
        <br />
        <textarea
          className="message"
          onChange={handleChange}
          type="text"
          name="message"
          value={contact.message}
        />
        <br />
        <br />
        <button type="submit" class="btn btn-info" onClick={refreshPage}>
          Submit
        </button>
      </form>
      <br />
      <br />
      <h3 class="project text-left">My Email</h3>
      <p class="desc font-weight-bold text-left h5">
        . . .or you can email me directly.
      </p>
      <a
        href="mailto:adrianong828@gmail.com"
        className="desc font-weight-bolder h4"
      >
        adrianong828@gmail.com
      </a>
      <br />
      <br />
      <Link className="desc font-weight-bold text-left h5" to="/">
        Back to Home
      </Link>
    </div>
  );
}
