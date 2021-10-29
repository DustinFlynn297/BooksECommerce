import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
  return (
    <container>
      <nav className="nav">
        <Link to="/">
          <Button variant="primary">Home</Button>
        </Link>
        <Link to="/login">
        <Button variant="primary">Login</Button>
        </Link>
        <Link to="/register">
        <Button variant="primary">Register</Button>
        </Link>
        <Link to="/bookDetails">
        <Button variant="primary">Book Info</Button>
        </Link>
        <Link to="/books">
        <Button variant="primary">Book List</Button>
        </Link>
        <Link to="/addNew">
        <Button variant="primary">Add New Book</Button>
        </Link>
      </nav>
    </container>
  );
}

export default NavBar;
