import React from "react";

import logo from '../../assets/logo.png'
import './Navbar.scss';
import Links from "./Link/Link";

const Navbar = () => {

    return (
        <nav>
            <div className={'nav'}>
                <div className='nav_logo'>
                    <a href='/'>
                        <img src={logo} alt={'logo'}>

                        </img>
                    </a>
                </div>
                <ul className={'nav_list'}>
                    <Links path={'/'} name={'Головна'}/>
                    <Links path={'/add_words'} name={'Додати слово'}/>
                    <Links path={'/test'} name={'Перевір себе'}/>
                    <Links path={'/stats'} name={'Статистика'}/>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;