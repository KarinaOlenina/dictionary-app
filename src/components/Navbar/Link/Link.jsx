import React from "react";

import {Link} from "react-router-dom";
import '../Navbar.scss';

const Links = ({ path, name, selected, onClick }) => {


    return (
        <li className={selected ? 'nav_link__selected' : 'nav_link'} >
            <Link to={path} onClick={onClick}>
                {name}
            </Link>
        </li>
    );
}

export default Links;