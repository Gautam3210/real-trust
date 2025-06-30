import { Link } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <Link to="/projects" className="nav-link">Project Management</Link>
        <Link to="/clients" className="nav-link">Client Management</Link>
        <Link to="/contact" className="nav-link">Contact Form</Link>
        <Link to="/subscribers" className="nav-link">Subscriber</Link>

      </div>
    </nav>
  );
}

export default Navbar;
