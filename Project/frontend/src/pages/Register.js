import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Register() {
    return(
        <div>
            <Header />
            <div className="login-c">
                <form>
                    <h3 className="text-center mb-4">Sign Up</h3>

                    <div className="mb-3">
                        <label>Username</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="example@example.com"
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
                        <label>Contact Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="+94 123 456 789"
                        />
                    </div>

                    <div className="mb-3">
                        <label>Address</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="123 Main St"
                        />
                    </div>

                    <div className="mb-3">
                        <label>Avatar</label>
                        <input
                            type="file"
                            className="form-control"
                        />
                    </div>

                    <div className="mb-3">
                    <label>Type</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="buyer or seller"
                        />
                    </div>

                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
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