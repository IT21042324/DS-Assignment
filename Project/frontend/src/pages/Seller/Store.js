import { Link } from "react-router-dom";
import "./Store.css";
import React, { useState } from "react";
import Banner from "./banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Register() {
  return (
    <div>
      <Header />
      <form className="form-container">
        <div>
          <h1 style={{ fontWeight: "bold", color: "White" }}>
            Enter Store Details
          </h1>
        </div>
        <br />

        <div className="right-side">
          <div className="mb-3">
            <label>Store Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter a store name"
            />
          </div>

          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter a location"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
