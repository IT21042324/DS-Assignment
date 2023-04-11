import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import pic from "../assets/login.png";
import { useRef } from "react";
import { useBackendAPI } from "../context/useBackendAPI";
import { UseUserContext } from "../context/useUserContext";
export default function Login() {
  //Creating refs to hold values of login form values
  const { selectedUserRole } = UseUserContext();
  const userName = useRef();
  const password = useRef();

  const { login } = useBackendAPI();

  const validateForm = () => {
    if (userName.current.value.trim() === '') {
      return 'Username is required';
    }
    if (password.current.value.trim() === '') {
      return 'Password is required';
    }
    if (password.current.value.length < 6 || password.current.value.length > 20) {
      return 'Password must be between 6 and 20 characters';
    }
  }

  const loginHandler = async (e) => {
    e.preventDefault();

    const errorMessage = validateForm();
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    //Using the login function provided by the backendAPI component to verify the user
    const info = await login({
      userName: userName.current.value,
      password: password.current.value,
      role: selectedUserRole,
    });
    if (info) alert(info);
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center" }}>
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
                minLength="6"
                maxLength="20"
                ref={password}
              />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <input type="submit" className="btn btn-primary" value="Sign In" />
            </div>

            <p className="forgot-password text-center">
              Don't have an account yet?
              <Link to={"/register"}>Register Now</Link>
            </p>
          </form>
        </div>
        <div>
          <img src={pic} alt="" style={{width: 300, height: 300}}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
