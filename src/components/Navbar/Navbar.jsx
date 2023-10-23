import React, {useEffect, useState} from "react";

import './Navbar.scss';
import Links from "./Link/Link";

const Navbar = () => {
    const [selectedLink, setSelectedLink] = useState("");

    const handleLinkClick = (path) => {
        setSelectedLink(path);
    };

    // Використовуємо useEffect для збереження та відновлення значення selectedLink
    useEffect(() => {
        // Спробуємо отримати збережене значення з локального сховища
        const savedSelectedLink = localStorage.getItem("selectedLink");
        if (savedSelectedLink) {
            setSelectedLink(savedSelectedLink);
        }
    }, []); // Пустий масив залежностей означає, що ефект виконається тільки при завантаженні компонента

    // Встановлюємо вибране значення у локальному сховищі при зміні selectedLink
    useEffect(() => {
        localStorage.setItem("selectedLink", selectedLink);
    }, [selectedLink]);

    return (
        <nav>
            <div className={'nav'}>
                <div className='nav_logo'>
                    <a href='/'>
                        <div className="nav_logo__pink-circle"></div>
                    </a>
                </div>
                <ul className={'nav_list'}>
                    <Links path={'/'} name={'Dictionary'}
                           selected={selectedLink === '/'}
                           onClick={() => handleLinkClick('/')}/>
                    <Links path={'/add_words'} name={'Add Words'}
                           selected={selectedLink === '/add_words'}
                           onClick={() => handleLinkClick('/add_words')}/>
                    <Links path={'/test'} name={'Check Yourself'}
                           selected={selectedLink === '/test'}
                           onClick={() => handleLinkClick('/test')}/>
                    <Links path={'/stats'} name={'Statistic'}
                           selected={selectedLink === '/stats'}
                           onClick={() => handleLinkClick('/stats')}/>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;