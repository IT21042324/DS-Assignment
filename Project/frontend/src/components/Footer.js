import { faFacebookF, faLinkedinIn, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../assets/pay.png";
import React from 'react';

function Footer () {
    const currYear = new Date().getFullYear();
    return (
        <footer className="section-p1">
            <div className="col">
                <h1>RB&NS</h1>
                <h4>Contact</h4>
                <p><strong>Address: </strong>New Kandy Road, Malabe</p>
                <p><strong>Phone: </strong> +94 123456789</p>
            </div>
            <div className="col">
                <h4>About</h4>
                <a href="#">About us</a>
                <a href="#">Delivery Info</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div className="col">
                <h4>Account</h4>
                <a href="#">View Cart</a>
                <a href="#">Track Order</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Help</a>
            </div>
            <div className="left-col">
                <div className="follow">
                    <h4>Follow us</h4>
                    <div className="icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <FontAwesomeIcon icon={faYoutube} />
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </div>
                <div className="col">
                    <h4>Secured Payment Gateways</h4>
                    <img src={pic} alt="" />
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; {currYear} CSSE_WE_36</p>
            </div>
        </footer>
    )
}

export default Footer;