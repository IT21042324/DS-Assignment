import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import { useState } from "react";
import image from "../assets/profilePic.png";

function Header() {
  const [showPopup, setShowPopup] = useState(false);
  const [profilePic, setProfilePic] = useState("");
  const handleViewItemClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

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

  const [user, setUser] = useState(true);
  return (
    <header>
      <h1>RB&NS</h1>
      <NavBar />
      <div className="navbar-icons">
        <div>
          {user ? (
            <img
              src={image}
              style={{ width: "25px", height: "25px", borderRadius: "40px" }}
              onClick={(e) => {
                setShowPopup(true);
              }}
            ></img>
          ) : (
            <Link to="/login">Login</Link>
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
                src={image}
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
            ) : (
              <img
                src={profilePic}
                style={{
                  width: "200px",
                  height: "200px",
                }}
              />
            )}

            <h4 style={{ color: "black" }}>UserName</h4>
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

            <h3></h3>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
