import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bgimg from "../images/calm.jpg";
import link from "../images/link.png";
import logo from "../images/logo1.png";
import "./all.css";

function Profile() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user, logout, loginWithRedirect, isAuthenticated } = useAuth0();

    useEffect(() => {
        fetch('http://localhost:8080/api/user/fetch')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('NO DATA AVAILABLE');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const userPosts = data.filter((item) => item.email === user?.email);

    return (
        <div class="container-fluid">
            <div class="row container-fluid p-4" style={styles.bg}>
                <div class="col-md-12 text-center p-2 text-white" style={styles.profile}>
                    <img src={logo} width={150} alt="user_profile" />
                    <br />
                    <br />
                    {isAuthenticated &&
                        <h3>{user.name}</h3>
                    }
                    {isAuthenticated &&
                        <p>{user.email}</p>
                    }
                    {isAuthenticated ?
                        (<></>) :
                        (<h4>Log In First</h4>)
                    }
                </div>

                {isAuthenticated ?
                    (
                        <button className="btn" style={styles.btn} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                    )
                    :
                    (
                        <button className="btn" style={styles.btn} onClick={() => loginWithRedirect()}>Log In</button>
                    )
                }
            </div>
            <div className='row text-center bground'>
                <div className="container-fluid p-2 nave" style={styles.posts}>
                    <span>Posts</span>
                </div>
                <div className='col-md-2' />
                {isAuthenticated ? (
                    <div className="col-md-8 p-3 mb-4">
                        {userPosts.length > 0 ? (
                            userPosts.map((item) => (
                                <div
                                    key={item._id}
                                    className="bg-dark-subtle mb-4 p-5 text-center cards"
                                    style={{ position: "relative" }}
                                >
                                    <button
                                        style={styles.cross}
                                        onClick={() =>
                                            alert("Post deletion will be available after 2-3 days.")
                                        }
                                    >
                                        &times;
                                    </button>
                                    <p className="stext">{item.lines}</p>
                                    <cite className="ptext">- {item.name}</cite>
                                    <br />
                                    <br />
                                    {item.socialLink && (
                                        <a
                                            className="links"
                                            href={item.socialLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={link}
                                                alt="Instagram"
                                                style={{ width: "30px", height: "30px" }}
                                            />
                                        </a>
                                    )}
                                    <br />
                                </div>
                            ))
                        ) : (
                            <>
                                <Link to="/upload">
                                    <button className="btn btn-primary mt-5">POST +</button>
                                </Link>
                            </>
                        )}
                    </div>
                ) : (
                    <div className="row mt-5">
                        <h3>No posts available</h3>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;

const styles = {
    profile: {
        maxWidth: "100%",
        height: "auto",
    },
    posts: {
        color: "white",
        border: "2px solid",
        borderRadius: "10px",
    },
    bg: {
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100vw",
    },
    btn: {
        backgroundColor: "black",
        opacity: "0.8",
        color: "white",
        width: "5rem",
        padding: "5px 10px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        
        float: "right",
    },
    cross: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'transparent',
        border: 'none',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
    }
};