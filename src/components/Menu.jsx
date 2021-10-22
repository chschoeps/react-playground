import React from "react";
import MenuLink from "./MenuLink";
import './Menu.css';

function Menu() {

    return (
        <div className="menu">
            <MenuLink to="/" label="Home" activeOnlyWhenExact />
            <MenuLink to="/api" label="API" activeOnlyWhenExact />
            <MenuLink to={{pathname: "/lifecycleHooks", state: {test: "TestProp"}}} state={{test: "TestProp2"}} label="Lifecycle Hooks" activeOnlyWhenExact />
            {/*<MenuLink to="/lifecycleHooks"  label="Lifecycle Hooks" activeOnlyWhenExact />*/}
        </div>
    );
}

export default Menu;
