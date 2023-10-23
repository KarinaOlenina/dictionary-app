import React from "react";

import './Home.scss'
import Arrow from '../../assets/Arrow.svg'
import Remove from '../../assets/Remove.svg'
import WordInput from "../../components/WordInput/WordInput";


const Home = ({list, onRemove}) => {

    return (
        <div className={'words-card'}>
            <h1 className={'title'}>My Dictionary</h1>
            <ul className={'words-card_list'}>
                {
                    list && list.map(item =>
                        <div className={'words-card_item'}>
                            <WordInput value={`${Object.keys(item)[0]}`} key={Object.keys(item)[0]} type={'text'}/>
                            <img
                                className={'arrow__svg'}
                                src={Arrow}
                                alt="Arrow"/>
                            <input
                                readOnly={true}
                                type={'text'}
                                name={'input'}
                                value={`${item[Object.keys(item)[0]]}`}
                                key={item.id}>
                            </input>
                            <img
                                className={'remove__svg'}
                                onClick={() => onRemove(item.id)}
                                src={Remove}
                                alt="Remove"/>
                        </div>
                    )}
            </ul>
        </div>

    )
}

export default Home;