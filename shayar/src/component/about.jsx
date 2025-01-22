import { Link } from 'react-router-dom';
import logo from "../images/logo1.png";
import "./All.css";

function About() {
    return (
        <div className="container-fluid bground text-center" style={bgr}>
            <div className="content">
                <img src={logo} width={150} alt="shayarana" /><br /><br />
                <h1 >
                    Welcome to <span className="text-white fw-bold">Shayarana</span>
                </h1>
                <p >Where words find their voice and emotions become poetry.</p>
                <p>Explore, share, and celebrate the art of poetry with us.</p>
                <p >
                    Our mission is to bring poets and readers together in one <span className="text-white fw-bold">harmonious community</span>.
                </p>
                <Link to="/contact" className="links">Contact Us</Link>
            </div>
        </div>
    );
}

export default About;

const bgr = {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};