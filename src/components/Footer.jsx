import './Footer.css'
import MenuLink from './MenuLink';

const Footer = () => {
    return (
        <div className="footer">
            <MenuLink dark className="footer-link" to="/about" label="About" />
            <MenuLink dark className="footer-link" to="/contact" label="Contact" />
        </div>
    );
}

export default Footer;
