import logo from '../logo.svg';
import '../ReactLogo.css';

function ReactLogo() {
  return (
    <div className="ReactLogo">
    <header className="ReactLogo-header">
        <h3> This logo got me 😄 </h3>
        <img src={logo} className="ReactLogo-logo" alt="logo" />
    </header>
    </div>
  );
}

export default ReactLogo;
