import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import { useState, useRef } from "react";
import { useBackendAPI } from "../context/useBackendAPI";
import { UseUserContext } from "../context/useUserContext";
import profileImg from "../assets/profileImg.jpg";

function Header() {
  const { user1, logoutUser, dispatch } = UseUserContext();

  //for the userprofile popup.
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  //The function to logout
  const logoutFunction = () => {
    //To logout the user
    logoutUser();
  };

  const userName = useRef();

  //To set the base64 value of the selected userProfile Image
  const [profilePic, setProfilePic] = useState("");

  function convertToBase64(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => setProfilePic(reader.result);
    reader.onerror = (error) => console.log("error: ", error);
  }

  const { updateUser } = useBackendAPI();

  const submitHandler = async (e) => {
    e.preventDefault();

    await updateUser({
      userId: user1[0]._id,
      userName: userName.current.value,
      image: profilePic,
    });
  };

  return (
    <header>
      <h1>RB&NS</h1>
      <NavBar />
      <div className="navbar-icons">
        <div>
          {user1[0] ? (
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "5px" }}>
                <h6>{user1[0].userName}</h6>
                <Link to="/" onClick={logoutFunction}>
                  <h6 style={{ float: "right", color: "red" }}>Logout</h6>
                </Link>
              </div>
              &nbsp;&nbsp;&nbsp;
              {profilePic ? (
                <img
                  src={profilePic}
                  alt={user1[0].userName}
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "40px",
                    marginTop: "10px",
                  }}
                  onClick={(e) => {
                    setShowPopup(true);
                  }}
                />
              ) : (
                <img
                  src={user1[0].image}
                  alt={user1[0].userName}
                  style={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "40px",
                    marginTop: "10px",
                  }}
                  onClick={(e) => {
                    setShowPopup(true);
                  }}
                />
              )}
            </div>
          ) : (
            <Link
              to="/login"
              onClick={(e) => {
                dispatch({ type: "SetUserRole", userRole: "Buyer" });
              }}
            >
              Login
            </Link>
          )}
        </div>
        <Link to="/buyer/Cart">
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
            {!user1[0].image ? (
              <img
                src={profileImg}
                style={{
                  backgroundColor: "white",
                  width: "200px",
                  height: "200px",
                  borderRadius: "100%",
                  border: "1px solid black",
                }}
                alt={user1[0].userName}
              />
            ) : profilePic ? (
              <img
                src={profilePic}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "100%",
                }}
              />
            ) : (
              <img
                src={user1[0].image}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "100%",
                }}
              />
            )}

            <h4 style={{ color: "black" }}>
              <input
                type="text"
                defaultValue={user1[0].userName}
                style={{ border: "none", outline: "none", textAlign: "center" }}
                onFocus={(event) => {
                  event.target.style.outline = "2px dashed black";
                }}
                onBlur={(event) => {
                  event.target.style.outline = "none";
                }}
                ref={userName}
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
                handleClosePopup();
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
