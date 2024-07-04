
import PropTypes from 'prop-types';
import "./navbar.css";

function Navbar(props) {
  return (
    <nav>
      <div className="logo">{props.title}</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
  };
  


export default Navbar;
