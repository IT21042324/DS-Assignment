import pic1 from "../assets/f1.png";
import pic2 from "../assets/f2.png";
import pic3 from "../assets/f3.png";
import pic4 from "../assets/f4.png";
import pic5 from "../assets/f5.png";
import React from 'react';

function Features() {
    return(
        <section id="feature" className="section-p1">
            <div className="fe-box">
                <img src={pic1} alt="" />
                <h6>Free Shipping</h6>
            </div>
            <div className="fe-box">
                <img src={pic2} alt="" />
                <h6>Online Order</h6>
            </div>
            <div className="fe-box">
                <img src={pic3} alt="" />
                <h6>Save Money</h6>
            </div>
            <div className="fe-box">
                <img src={pic4} alt="" />
                <h6>Promotions</h6>
            </div>
            <div className="fe-box">
                <img src={pic5} alt="" />
                <h6>24/7 Service</h6>
            </div>
        </section>
    );
}

export default Features;