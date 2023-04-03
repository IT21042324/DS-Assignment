import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useRef } from "react";
import { UseBackendAPI } from "../context/useBackendAPI";
import { UseUserContext } from "../context/useUserContext";
export default function Login() {
  //Creating refs to hold values of login form values
  const userName = useRef();
  const password = useRef();

  const { login } = UseBackendAPI();
  const loginHandler = async (e) => {
    e.preventDefault();

    //Using the login function provided by the backendAPI component to verify the user
    const info = await login({
      userName: userName.current.value,
      password: password.current.value,
    });
    alert(info);
  };

  return (
    <div>
      <Header />
      <div className="login-c">
        <form onSubmit={loginHandler}>
          <h3 className="text-center mb-4">Sign In</h3>

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
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password"
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
            Don't have an account yet?{" "}
            <Link to={"/register"}>Register Now</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}
