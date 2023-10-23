import React, {useState} from "react";

import './AddWords.scss'
import Arrow from "../../assets/arrow-down.svg";

const AddWords = ({addWord}) => {
    const [engValue, setEngValue] = useState('');
    const [ukrValue, setUrkValue] = useState('');

    return (
        <div className={'card'}>
            <h1 className={'title'}>Add New Words</h1>
            <form className={'card_input-form'}>
                <input id={'en-word'}
                       onChange={e => {
                           setEngValue(e.target.value)
                       }}
                       type={'text'} name={'en-word'} placeholder={'Enter the original'} autoComplete={'off'}/>
                <img
                    className={'arrow__svg'}
                    src={Arrow}
                    alt="Arrow"/>
                <input id={'ua-word'}
                       onChange={e => {
                           setUrkValue(e.target.value)
                       }}
                       type={'text'} name={'ua-word'} placeholder={'Enter the translation'} autoComplete={'off'}/>
                <button className={'button__pink-gradient'} type={'submit'} onClick={() => addWord(engValue, ukrValue)}>Add New Word</button>
            </form>
        </div>
    )
}

export default AddWords;