import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import upload from "../images/calm.jpg";
import "./all.css";

function Upload() {

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        lines: "",
        socialLink: "",
    });

    const { user, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (isAuthenticated && user?.email) {
            setFormData((prevData) => ({
                ...prevData,
                email: user.email,

            }));
        };
    }, [isAuthenticated, user]);

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        try {
            const response = await fetch('http://localhost:8080/api/user/create', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            const confirmation = window.confirm("Are you sure you want to submit?");
            if (confirmation) {
                // console.log("Poetry submitted successfully!");
                alert("Poetry submitted successfully!");
            } else {
                // console.log("Submission canceled.");
                alert("Submission canceled.");
            }

            setFormData({
                email: "",
                name: "",
                lines: "",
                socialLink: "",
            });
        } catch (error) {
            console.error("Error submitting poetry:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <div className="container-fluid p-5" style={styles.bg}>
                <h2 className="text-center mb-4 text-white">Showcase your poetry @Shayarana</h2>
                {
                    isAuthenticated ?
                        <div className="row d-flex p-3 justify-content-center">
                            <div className="col-md-6" style={styles.opaqueBox}>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={formData.email || user?.email || "default@gmail.com"}
                                            onChange={handleChange}
                                            // readOnly
                                            placeholder="Enter email"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="author" className="form-label">Author Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter author name"
                                            autoComplete="off"
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lines" className="form-label">Lines</label>
                                        <textarea
                                            className="form-control"
                                            id="lines"
                                            value={formData.lines}
                                            onChange={handleChange}
                                            rows="3"
                                            placeholder="Enter lines"
                                            autoComplete="off"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="socialLink" className="form-label">Social Link</label>
                                        <input
                                            type="link"
                                            className="form-control"
                                            id="socialLink"
                                            value={formData.socialLink || "#"}
                                            onChange={handleChange}
                                            placeholder="Social link (e.g., Instagram)"
                                            autoComplete="off"
                                        />
                                    </div>
                                    <button className="btn btn-primary w-100" type="submit" >Submit</button>
                                </form>
                            </div>
                        </div>
                        : <div className="text-center text-white mt-5 p-5">
                            <marquee><h3>Log-in to Upload</h3></marquee>
                            <Link to="/profile" className="nav-link text-primary">
                                <span>Go to Profile</span>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
}

export default Upload;

const styles = {
    bg: {
        backgroundImage: `url(${upload})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "89.8vh",
    },
    opaqueBox: {
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Opaque white
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
};