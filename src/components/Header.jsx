import './Header.css';
import Menu from "./Menu";
import LanguageChooser from "./LanguageChooser";
import React from "react";
import UserContext from '../context/user';

// const UserContext = React.createContext();

const Header = () => {
    return (
        <div className="header">
            <Menu className="menu" />
            <LanguageChooser className="right-element" />
            <UserContext.Consumer>{context => <div>Username: {context.user.userName} {context.logger("test")}</div>}</UserContext.Consumer>
        </div>
    );
}

export default Header;
