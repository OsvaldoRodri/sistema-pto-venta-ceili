import { Link } from "react-router-dom";
import '../styles/header.css';
import ButtonPrimary from "./buttons";

function Header() {
    return (
        <header>
            <div className="logoAndTitle">
                <img src="/imgs/icons/logo.png" alt="HelaDuck Logo" />
                <div className="logo"><h1>HelaDuck</h1></div>
            </div>
            <div className="navBar">
                <nav>
                    <ul>
                        <li><Link to="/location">¿Donde esta HelaDuck?</Link></li>
                        <li><Link to="/about">Acerca de HelaDuck</Link></li>
                        <li><Link to="/menu"><ButtonPrimary>¿Requires una web o app?¡Has click aqui!</ButtonPrimary></Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;