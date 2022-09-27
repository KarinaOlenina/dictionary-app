import React from "react";

import './Home.scss'
import deleteSvg from '../../assets/close.svg'


const Home = ({list, onRemove}) => {

    return (
        <div className={'words-card'}>
            <h1 className={'word-card_title'}>Мій словник</h1>
            <ul className={'words-card_list'}>
                {
                    list && list.map(item =>
                        <div className={'words-card_item'}>
                            <input
                                readOnly={true}
                                type={'text'}
                                name={'input'}
                                value={`${Object.keys(item)[0]}`}
                                key={Object.keys(item)[0]}>
                            </input>
                            <span> - </span>
                            <input
                                readOnly={true}
                                type={'text'}
                                name={'input'}
                                value={`${item[Object.keys(item)[0]]}`}
                                key={item.id}>
                            </input>
                            <img
                                onClick={() => onRemove(item.id)}
                                src={deleteSvg}
                                alt="Кнопка редактировать"/>
                        </div>
                    )}
            </ul>
        </div>

    )
}

export default Home;