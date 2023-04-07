import "./Store.css";
import React, { useRef } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useBackendAPI } from "../../context/useBackendAPI";

export default function Register() {
  const storeName = useRef();
  const location = useRef();

  const { createStore } = useBackendAPI();

  const submitHandler = async (e) => {
    e.preventDefault();
    const store = {
      storeName: storeName.current.value,
      location: location.current.value,
    };

    //To create a store and add it to the merchant's storeID field in the merchant doc as well
    await createStore(store);
  };

  return (
    <div>
      <Header />
      <form className="form-container" onSubmit={(e) => submitHandler(e)}>
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
              ref={storeName}
            />
          </div>

          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="enter a location"
              ref={location}
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
