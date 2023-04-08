import { Link } from "react-router-dom";
import "./Store.css";
import React, { useState } from "react";
import Banner from "./banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Register() {
  const [storeUrl, setStoreUrl] = useState("");

  const handleStoreChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setStoreUrl(reader.result);
    };
  };
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <form className="form-container">
        <div>
          <h1 style={{ fontWeight: "bold", color: "White" }}>
            Enter Store Details
          </h1>
        </div>
        <br></br>
        <div className="left-side">
          <div className="mb-1">
            <label>Store Item Image</label>
            <input
              type="file"
              className="form-control"
              id="StoreItemInput"
              onChange={handleStoreChange}
            />
          </div>
          <div className="img">
            {storeUrl && <img src={storeUrl} alt="store" />}
          </div>
        </div>

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

          <div className="mb-3">
            <label>Category</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter a category"
            />
          </div>

          <div className="mb-3">
            <label>Store Item</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter a store item"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
}
