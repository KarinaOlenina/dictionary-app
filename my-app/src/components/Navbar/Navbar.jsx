import React from "react";

import logo from '../../assets/logo.png'
import './Navbar.scss';
import Link from "./Link/Link";

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
                        <Link path={'/'} name={'Головна'}/>
                        <Link path={'/add_words'} name={'Додати слово'}/>
                        <Link path={'/test'} name={'Перевір себе'}/>
                        <Link path={'/stats'} name={'Статистика'}/>
                    </ul>
                </div>
        </nav>
    )
}

export default Navbar;