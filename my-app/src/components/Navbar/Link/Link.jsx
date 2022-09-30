import React from "react";

import {Link} from "react-router-dom";

const Links = ({path, name}) => {


    return (
        <li><Link className={'nav_link'} to={path}>{name}</Link></li>
    )
}

export default Links;