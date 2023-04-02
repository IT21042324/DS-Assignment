import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { UseUserContext } from "../context/useUserContext";

function Header() {
  //for the userprofile popup.

  const { user1 } = UseUserContext();

  const [showPopup, setShowPopup] = useState(false);

  const handleViewItemClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [userName, setUserName] = useState("");

  //To set the base64 value of the selected userProfile Image
  const [profilePic, setProfilePic] = useState("");

  function convertToBase64(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setProfilePic(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error: ", error);
    };
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const submittedData = await axios.patch(
        "http://localhost:8080/api/user/update/",
        { userId: "6405d20f6d0593dac266cafe", userName, image: profilePic }
      );
      console.log(submittedData);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <header>
      <h1>RB&NS</h1>
      <NavBar />
      <div className="navbar-icons">
        <div>
          {user1[0] ? (
            <div style={{ display: "flex" }}>
              <h5>{user1[0].userName}</h5> &nbsp;&nbsp;&nbsp;
              <img
                src={user1[0].image}
                style={{ width: "25px", height: "25px", borderRadius: "40px" }}
                onClick={(e) => {
                  setShowPopup(true);
                }}
              ></img>
            </div>
          ) : (
            <Link to="/login">Login </Link>
          )}
        </div>
        <Link to="/Cart">
          <div className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </Link>
      </div>

      {showPopup && (
        <div
          className="popup"
          style={{ display: showPopup ? "flex" : "none" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleClosePopup();
            }
          }}
        >
          <div className="popup-content">
            {profilePic == "" || profilePic == null ? (
              <img
                src={user1[0].image}
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
            ) : (
              <img
                src={user1[0].image}
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
            )}

            <h4 style={{ color: "black" }}>
              <input
                type="text"
                defaultValue="UserName"
                style={{ border: "none", outline: "none", textAlign: "center" }}
                onFocus={(event) => {
                  event.target.style.outline = "2px dashed black";
                }}
                onBlur={(event) => {
                  event.target.style.outline = "none";
                }}
                onChange={(e) => setUserName(e.target.value)}
              />
            </h4>

            <input
              accept="image/*"
              type="file"
              id="changeProfilePic"
              style={{
                padding: "10px",
                color: "white",
                backgroundColor: "black",
              }}
              onChange={(e) => convertToBase64(e)}
            />

            <h2 style={{ color: "black" }}></h2>
            <input
              type="submit"
              value="Save Details"
              style={{
                padding: "10px",
                color: "white",
                backgroundColor: "black",
              }}
              onClick={(e) => {
                submitHandler(e);
              }}
            />

            <h3></h3>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
