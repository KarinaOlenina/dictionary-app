import React from "react";

import './Question.scss'
import WordInput from "../WordInput/WordInput";
import Arrow from "../../assets/Arrow.svg";

const Question = ({word, answers, correct, onClick}) => {

    return (
        <div className={'quest-card'}>
            <div className={'main-word'}>
                <WordInput value={word}/>
            </div>
            <img
                className={'arrow__svg'}
                src={Arrow}
                alt="Arrow"/>
            <div className={'answer-words'}>
                {answers.map((elem) =>
                    <div onClick={() => onClick(elem, correct)} key={elem}>
                        <WordInput value={elem && elem}
                                   key={elem}
                                   type={'button'}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Question