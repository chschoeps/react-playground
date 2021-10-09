import './Header.css';
import Menu from "./Menu";
import LanguageChooser from "./LanguageChooser";

const Header = () => {
    return (
        <div className="header">
            <Menu className="menu" />
            <LanguageChooser className="right-element" />
        </div>
    );
}

export default Header;
