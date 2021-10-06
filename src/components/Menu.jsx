import React from "react";
import MenuLink from "./MenuLink";
import './Menu.css';

function Menu() {
    return (
        <div className="menu">
            <MenuLink to="/" label="Home" activeOnlyWhenExact />
            <MenuLink to="/api" label="API" activeOnlyWhenExact />
        </div>
    );
}

export default Menu;
