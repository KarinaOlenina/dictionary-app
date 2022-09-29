import React from "react";

import './Question.scss'

const Question = ({word, answers, correct, onClick}) => {

    return (
        <div className={'quest-card'}>
            <h2 className={'quest-card_title'}>{word}</h2>
            <div>
                {answers.map((elem) =>
                    <button onClick={() => onClick(elem, correct)} key={elem}
                            className={'quest-card_variant'}>{elem && elem}</button>
                )}
            </div>
        </div>
    )
}

export default Question