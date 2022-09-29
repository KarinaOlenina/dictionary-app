import React, {useState} from "react";

import './AddWords.scss'

const AddWords = ({addWord}) => {
    const [engValue, setEngValue] = useState('');
    const [ukrValue, setUrkValue] = useState('');

    return (
        <div className={'card'}>
            <h1 className={'card_title'}>Додайте нове слово</h1>
            <form className={'card_input-form'}>
                <input id={'en-word'}
                       onChange={e => {
                           setEngValue(e.target.value)
                       }}
                       type={'text'} name={'en-word'} placeholder={'Введіть ангійською'} autoComplete={'off'}/>
                <span>-</span>
                <input id={'ua-word'}
                       onChange={e => {
                           setUrkValue(e.target.value)
                       }}
                       type={'text'} name={'ua-word'} placeholder={'Введіть українською'} autoComplete={'off'}/>
                <button type={'submit'} onClick={() => addWord(engValue, ukrValue)}>Зберегти</button>
            </form>
        </div>
    )
}

export default AddWords;