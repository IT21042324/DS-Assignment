import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useRef } from "react";
import { useBackendAPI } from "../context/useBackendAPI";
import avatar from "../assets/profilePic.png";
import { UseUserContext } from "../context/useUserContext";

export default function Register() {
  const [profilePic, setProfilePic] = useState(avatar);

  //Naming our refs to submit and store form data
  const userName = useRef();
  const password = useRef();
  const contact = useRef();
  const address = useRef();

  //To set the user role
  const { selectedUserRole } = UseUserContext();

  //Function to convert image to base64 so that it can be stored in the database
  function convertToBase64(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setProfilePic(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error: ", error);
    };
  }
  const { registerUser } = useBackendAPI();

  //To register Merchant
  async function registerMerchant() {
    const dataToSave = {
      userName: userName.current.value,
      password: password.current.value,
      contact: contact.current.value,
      address: address.current.value,
      image: profilePic,
      role: selectedUserRole,
    };

    await registerUser(dataToSave);
  }

  return (
    <div>
      <Header />
      <div className="login-c">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            registerMerchant();
          }}
        >
          <h3 className="text-center mb-4">Sign Up</h3>

          <div
            className="mb-3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <label htmlFor="avatar">
              {profilePic ? (
                <img
                  src={profilePic}
                  style={{
                    width: "170px",
                    height: "170px",
                  }}
                />
              ) : (
                <img
                  src={avatar}
                  style={{
                    width: "170px",
                    height: "170px",
                  }}
                />
              )}
            </label>
            <input
              id="avatar"
              type="file"
              className="form-control"
              onChange={(e) => convertToBase64(e)}
              style={{ display: "none" }}
            />
          </div>
          <div className="mb-3">
            <label>Username</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@example.com"
              ref={userName}
              required
            />
          </div>
          <div className="mb-3">
            <label>Create Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              ref={password}
              required
            />
          </div>
          <div className="mb-3">
            <label>Contact Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="+94 123 456 789"
              ref={contact}
              required
            />
          </div>
          <div className="mb-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="123 Main St"
              ref={address}
              required
            />
          </div>
          <div className="d-grid">
            <input type="submit" className="btn btn-primary" value="Sign Up" />
          </div>
          <p className="forgot-password text-center">
            Already a member? <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
