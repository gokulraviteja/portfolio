import "../App.css"
import logo from '../logo.svg';
import '../ReactLogo.css';


function Nav() {


    return (
    <nav>
        <span><img src={logo} className="ReactLogo-logo1"  alt="logo" /></span>

        <h1 className="heading" > <i className="fa fa-laptop" aria-hidden="true"></i> Cheat Sheets  </h1>

        {/* <h3> Logo </h3>
        <ul className="nav-links"> 

            <Link style={navStyle} to="/">
                <li> Home</li>
            </Link>

            <Link style={navStyle} to="/logo">
                <li> React Logo</li>
            </Link>

        </ul> */}

        <span><img src={logo} className="ReactLogo-logo2" alt="logo" /></span>    
    </nav>

  );
}

export default Nav;
