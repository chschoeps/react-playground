import './MenuLink.css';
import {Link, useRouteMatch} from "react-router-dom";

const MenuLink = ({to, label, activeOnlyWhenExact, dark, state}) => {
    let match = useRouteMatch({
       path: to,
       exact: activeOnlyWhenExact,
    });

    let className;
    if (dark) {
        className = match ? "menu-link-active menu-link dark" : "menu-link dark"
    } else {
        className = match ? "menu-link-active menu-link light" : "menu-link light"
    }
    return (
        <Link className={className} state={state} to={to}>{label}</Link>
    )
};

export default MenuLink;
