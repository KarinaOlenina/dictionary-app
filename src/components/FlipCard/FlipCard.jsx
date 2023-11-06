import React, { useState } from "react";
import './FlipCard.scss'
import {currentAnswer} from "../../redux/reducers/currentAnswer";
import {useDispatch, useSelector} from "react-redux";
import getNextWorld from "../../utils/getNextWorld";

const FlipCard = ({ word, correct, map }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const show = useSelector((state) => state.showScore.value);
    const dispatch = useDispatch();

    const { value: rightAnswers } = useSelector((state) => state.currentAnswer);
    const { value: currentQuestion } = useSelector((state) => state.currentQuestion);
    const nextQuestion = currentQuestion + 1;
    const mapSize = map?.size;

    const handleAnswerClick = (isKnown) => {
        if (isKnown) {
            dispatch(currentAnswer.actions.result(1));
        }

        getNextWorld(nextQuestion, mapSize, dispatch, show, rightAnswers);
    };

    return (
        <div className="flip-card_container">
            <div className={`flip-card ${isFlipped ? "flipped" : ""}`} onClick={() => setIsFlipped(!isFlipped)}>
                <div className="flipcard-front">
                    {word}
                </div>
                <div className="flipcard-back">
                    {correct}
                </div>
            </div>
            <div className="know-buttons">
                <button onClick={() => handleAnswerClick(true)}>I know</button>
                <button onClick={() => handleAnswerClick(false)}>I don't know</button>
            </div>
        </div>
    );
};


export default FlipCard;
