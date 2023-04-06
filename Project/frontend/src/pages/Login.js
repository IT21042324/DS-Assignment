import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Login() {
    return(
        <div>
            <Header />
            <div className="login-c">
                <form>
                    <h3 className="text-center mb-4">Sign In</h3>

                    <div className="mb-3">
                    <label>Username</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="example@gmail.com"
                    />
                    </div>

                    <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="password"
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
                    <button type="submit" className="btn btn-primary">
                        Sign In
                    </button>
                    </div>
                    <p className="forgot-password text-center">
                    Don't have an account yet? <Link to={"/register"}>Register Now</Link>
                    </p>
                </form>
            </div>
            <Footer />
        </div>
    );
}