import './Navbar.css';
import {Link} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
        
                <h2>🛂 Immigration Tracker</h2>
            </div>
                <div className="navbar-links">
                    <Link to ="/Dashboard"> Dashboard</Link>
                    <Link to ="/MyInformation"> My Information</Link> 
                    <Link to ="/CRSCalculator"> CRS Calculator</Link>
                    <Link to ="/RecommendedStreams"> Recommended Streams</Link>
                    <Link to ="/Register"> Register </Link>
                    <Link to="/Login"> Login </Link>
                     
                </div>
        </nav>
    );
};
export default Navbar;