import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import CartWidget from "./CartWidget"

const NavBar = (props) => {

    return (
        <header id="header">
            <Link to="/">
                <img src="./logo.bt2.png" alt="" />
            </Link>
            <nav>
                <Nav.Link as={Link} to="/categoria/bikinis">Bikinis</Nav.Link>
                <Nav.Link as={Link} to="/categoria/enterizas">Enterizas</Nav.Link>
                <CartWidget />
            </nav>
        </header>
    )
}

export default NavBar;