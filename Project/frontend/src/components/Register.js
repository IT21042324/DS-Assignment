import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useRef } from "react";
import { useBackendAPI } from "../context/useBackendAPI";
import avatar from "../assets/profilePic.png";
import { UseUserContext } from "../context/useUserContext";

export default function Register() {
  // create state variables for the input fields' values and errors:
  const [profilePic, setProfilePic] = useState(avatar);
  const [usernameValue, setUsernameValue] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [contactValue, setContactValue] = useState("");
  const [contactError, setContactError] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [addressError, setAddressError] = useState("");

  //Naming our refs to submit and store form data
  const userName = useRef();
  const password = useRef();
  const contact = useRef();
  const address = useRef();

  //To set the user role
  const { selectedUserRole } = UseUserContext();

  //Create a function to validate each field's
  function validateUsername(value) {
    if (!value) {
      setUsernameError("Username is required");
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setUsernameError("Username must be a valid email address");
    } else {
      setUsernameError("");
    }
  }

  function validatePassword(value) {
    if (!value) {
      setPasswordError("Password is required");
    } else if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  }

  function validateContact(value) {
    if (!value) {
      setContactError("Contact number is required");
    } else if (value.length < 10) {
      setContactError("Contact number must be at least 10 digits long");
    } else {
      setContactError("");
    }
  }

  function validateAddress(value) {
    if (!value) {
      setAddressError("Address is required");
    } else {
      setAddressError("");
    }
  }

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

          <div className="mb-3">
            <label>Username</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@example.com"
              value={usernameValue}
              onChange={(e) => {
                setUsernameValue(e.target.value);
                validateUsername(e.target.value);
              }}
              required
            />
            {usernameError && <p className="text-danger">{usernameError}</p>}
          </div>
          <div className="mb-3">
            <label>Create Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={passwordValue}
              onChange={(e) => {
                setPasswordValue(e.target.value);
                validatePassword(e.target.value);
              }}
              required
            />
            {passwordError && <p className="text-danger">{passwordError}</p>}
          </div>
          <div className="mb-3">
            <label>Contact Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="+94 123 456 789"
              value={contactValue}
              onChange={(e) => {
                setContactValue(e.target.value);
                validateContact(e.target.value);
              }}
              required
            />
            {contactError && <p className="text-danger">{contactError}</p>}
          </div>
          <div className="mb-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="123 Main St"
              value={addressValue}
              onChange={(e) => {
                setAddressValue(e.target.value);
                validateAddress(e.target.value);
              }}
              required
            />
            {addressError && <p className="text-danger">{addressError}</p>}
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
