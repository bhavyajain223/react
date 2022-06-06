import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <div className="bg-info">
        <Navbar expand="lg">
          <Nav.Link>
            <Link to="/counter" className="btn btn-outline-success">
              Counter
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/funtodolist" className="btn btn-outline-success">
              ToDOLIst
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/digiclock" className="btn btn-outline-success">
              Digital Clock Functional component
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/digiclockclass" className="btn btn-outline-success">
              Digital Clock Class component
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/currencyconverter" className="btn btn-outline-success">
              Currency Converter
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/hoc2" className="btn btn-outline-success">
              FILTER DATA
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/contextdemo2" className="btn btn-outline-success">
              Theme Switcher
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/weatherapp" className="btn btn-outline-success">
              Weather App
            </Link>
          </Nav.Link>
        </Navbar>
      </div>
    </>
  );
};

export default Menu;
