import React from "react";

import './Link.scss';

const Link = ({path, name}) => {


    return (
        <li><a className={'nav_link'} href={path}>{name}</a></li>
    )
}

export default Link;