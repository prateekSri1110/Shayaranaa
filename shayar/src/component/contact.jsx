import React from "react";
import fb from "../images/fb.png";
import gmail from "../images/gmail.png";
import ig from "../images/ig.png";
import linkedin from "../images/linkedin.png";
import me from "../images/prateek.jpg";
import "./All.css";

function Contact() {
    return (
        <div className="container py-5">
            <div className="row text-center mb-4">
                <h1>Contact Us</h1>
                <p className="text-muted">
                    Feel free to reach out to us on our social media platforms or via email. We’d love to hear from you!
                </p>
            </div>

            {/* Profile Section */}
            <div className="row justify-content-center mb-5">
                <div className="col-md-4 text-center">
                    <img
                        src={me}
                        alt="Contact Us"
                        className="img-fluid mb-3"
                        style={{ width: "250px", borderRadius: "20px" }}
                    />
                </div>
            </div>

            {/* Social Media Links */}
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <div className="d-flex justify-content-around">
                        <a
                            href="https://www.instagram.com/prateekxri/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={ig} className="logs" alt="ig" />
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=100010350105213"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={fb} className="logs" alt="ig" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/prateek-srivastava-1005/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedin} className="logs" alt="ig" />
                        </a>
                        <a
                            href="https://mail.google.com/mail/u/1/#inbox?compose=new"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={gmail} className="logs" alt="ig" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;