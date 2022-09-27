import React, {useState} from "react";

import './Question.scss'

const Question = ({word, answers, correct, onClick}) => {

    // const [selectedAnswer, setSelectedAnswer] = useState(null);
    //
    // const onClick = (elem) => {
    //
    //     if (elem === correct) {
    //         setSelectedAnswer(selectedAnswer + 1)
    //         console.log(elem)
    //     }
    // }

    return (
        <div className={'quest-card'}>
            <h2 className={'quest-card_title'}>{word}</h2>
            <div>
                {answers.map((elem) =>
                    <button onClick={() => onClick(elem, correct)} key={elem}
                            className={'quest-card_variant'}>{elem && elem}</button>
                )}
                {/*<button className={'quest-card_variant'}>{answers[0]}</button>*/}
                {/*<button className={'quest-card_variant'}>{answers[1]}</button>*/}
                {/*<button className={'quest-card_variant'}>{answers[2]}</button>*/}
                {/*<button className={'quest-card_variant'}>{answers[3]}</button>*/}
            </div>
        </div>
    )
}

export default Question