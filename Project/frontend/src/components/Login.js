import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import pic from "../assets/login.png";
import { useEffect, useRef, useState } from "react";
import { useBackendAPI } from "../context/useBackendAPI";
import { UseUserContext } from "../context/useUserContext";
export default function Login() {
  //Creating refs to hold values of login form values
  const { selectedUserRole } = UseUserContext();
  const userName = useRef();
  const password = useRef();

  const { dispatch } = UseUserContext();
  const [isAdmin, setIsAdmin] = useState(false);
  const [existUserRole, setExistUserRole] = useState("");

  const { login } = useBackendAPI();

  const validateForm = () => {
    if (userName.current.value.trim() === "") {
      return "Username is required";
    }
    if (password.current.value.trim() === "") {
      return "Password is required";
    }
  };

  useEffect(() => {
    setExistUserRole(selectedUserRole);
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();

    const errorMessage = validateForm();
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    //Using the login function provided by the backendAPI component to verify the user
    var role;
    if (isAdmin) role = "Admin";
    else role = existUserRole || selectedUserRole;

    const info = await login({
      userName: userName.current.value,
      password: password.current.value,
      role,
    });
    if (info) alert(info);
  };

  function setAdminFunction() {
    if (!existUserRole) setExistUserRole(selectedUserRole);
    console.log(existUserRole);

    dispatch({
      type: "SetUserRole",
      userRole: "Admin",
    });
    setIsAdmin(true);
  }

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div className="login-c">
          <form onSubmit={loginHandler}>
            <h3 className="text-center mb-4">Sign In</h3>

            <div className="mb-3">
              <label>Username</label>
              <input
                type="email"
                className="form-control"
                placeholder="example@gmail.com"
                ref={userName}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="password"
                ref={password}
              />
            </div>

            <div className="d-grid">
              <input
                type="submit"
                className="btn btn-primary"
                value="Sign In"
              />
            </div>

            {!isAdmin ? (
              <>
                <p className="forgot-password text-center">
                  Don't have an account yet?
                  <Link
                    to={"/register"}
                    onClick={(e) => {
                      dispatch({
                        type: "SetUserRole",
                        userRole: existUserRole,
                      });
                    }}
                  >
                    Register Now
                  </Link>
                </p>
                <p className="forgot-password text-center">
                  <Link onClick={(e) => setAdminFunction()}>admin?</Link>
                </p>
              </>
            ) : (
              <Link
                onClick={(e) => {
                  dispatch({
                    type: "SetUserRole",
                    userRole: existUserRole,
                  });
                  console.log(existUserRole);
                  setIsAdmin(false);
                }}
              >
                user?
              </Link>
            )}
          </form>
        </div>
        <div>
          <img src={pic} alt="" style={{ width: 300, height: 300 }} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
