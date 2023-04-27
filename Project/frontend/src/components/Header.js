// Importing necessary modules
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import { useState, useRef, useEffect } from "react";
import { useBackendAPI } from "../context/useBackendAPI";
import { UseUserContext } from "../context/useUserContext";

// Defining the Header function
function Header() {
  // Destructuring variables from the useUserContext hook
  const { user1, logoutUser, dispatch, getUser } = UseUserContext();

  const user = getUser();

  // Setting initial state for showing the user profile popup
  const [showPopup, setShowPopup] = useState(false);

  // Defining function for closing the user profile popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Defining function for logging out the user
  const logoutFunction = () => {
    logoutUser();
  };

  // Creating a reference to the input field for the user name
  const userName = useRef();

  // Setting initial state for the user profile picture as an empty string
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    setProfilePic(user?.image);
  }, [user?.image]);

  useEffect(() => {
    async function setProfilePicture() {
      if (user?.image) setProfilePic(user.image);
    }
    setProfilePicture();
  }, []);

  // Function for converting the selected image file to base64 format
  function convertToBase64(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => setProfilePic(reader.result);
    reader.onerror = (error) => console.log("error: ", error);
  }

  // Retrieving the updateUser function from the useBackendAPI hook
  const { updateUser } = useBackendAPI();

  // Function for handling the submission of the user profile update form
  const submitHandler = async (e) => {
    e.preventDefault();

    await updateUser({
      userId: user._id,
      userName: userName.current.value,
      image: profilePic,
    });
  };

  // Rendering the Header component
  return (
    <header>
      <h1>RB&NS</h1>
      <NavBar />
      <div className="navbar-icons">
        <div>
          {user ? (
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "5px" }}>
                <h6>{user.userName}</h6>
                <Link to="/" onClick={logoutFunction}>
                  <h6 style={{ float: "right", color: "red" }}>Logout</h6>
                </Link>
              </div>
              &nbsp;&nbsp;&nbsp;
              {/* Displaying the user profile picture*/}
              {profilePic && (
                <img
                  src={profilePic}
                  alt={user.userName}
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
            // Displaying a link to the login page if the user is not logged in
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
        {(user?.role === "Buyer" || !user) && (
          <Link to="/buyer/Cart">
            <div className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </div>
          </Link>
        )}
      </div>

      {showPopup && (
        <div
          className="popup"
          style={{ display: showPopup ? "flex" : "none", zIndex: "100" }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleClosePopup();
            }
          }}
        >
          <div className="popup-content">
            {profilePic && (
              <img
                src={profilePic}
                style={{
                  backgroundColor: "white",
                  width: "200px",
                  height: "200px",
                  borderRadius: "100%",
                  border: "1px solid black",
                }}
                alt={user.userName}
              />
            )}

            <h4 style={{ color: "black" }}>
              <input
                type="text"
                defaultValue={user.userName}
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
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
