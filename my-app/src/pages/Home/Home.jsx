import React from "react";

import './Home.scss'
import deleteSvg from '../../assets/close.svg'


const Home = ({list, onRemove}) => {

    // const wordsKey = [];
    // const wordsValue = [];
    //
    // if (list) {
    //     for (let item of list) {
    //         wordsKey.push(Object.keys(item)[1])
    //         wordsValue.push(item[Object.keys(item)[1]])
    //     }
    // }
    //
    //
    // {
    //     if (list) {
    //         let map = new Map();
    //         for (let listElement of list) {
    //             let key = Object.keys(listElement)[0];
    //             map.set(key, listElement[key]);
    //         }
    //         // console.log(map);
    //
    //         // shuffler
    //         // let keyArray = Array.from(map.keys());
    //         // console.log(keyArray);
    //         // const shuffled = keyArray.sort(() => 0.5 - Math.random());
    //         // let selected = shuffled.slice(0, 10);
    //         // console.log(selected);
    //
    //     }
    // }

    return (
        <div className={'words-card'}>
            <h1>Мій словник</h1>
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