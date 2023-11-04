import React, {useState} from "react";
import axios from "axios";

import './Test.scss'
import Question from "../../components/Question/Question";

import {useDispatch, useSelector} from "react-redux";
import {currentAnswer} from "../../redux/reducers/currentAnswer";
import {openQuestion} from "../../redux/reducers/openQuestion";
import {currentQuestions} from "../../redux/reducers/currentQuestion";
import {showScore} from "../../redux/reducers/showScore";
import arrowBack from "../../assets/arrow-back.svg";
import FlipCard from "../../components/FlipCard/FlipCard";

const Test = ({quizModel, map}) => {

    const rightAnswers = useSelector((state) => state.currentAnswer.value);
    const IsOpen = useSelector((state) => state.openQuestion.value);
    const currentQuestion = useSelector((state) => state.currentQuestion.value);
    const show = useSelector((state) => state.showScore.value);
    const [mode, setMode] = useState("PAIRS");

    const dispatch = useDispatch()

    const onClose = () => {

        if (show) {
            dispatch(currentQuestions.actions.resetResult());
            dispatch(showScore.actions.result(false));
            dispatch(openQuestion.actions.result(false));
            return;
        }
        const ask = window.confirm('Are you sure you want to close the test?');
        if (ask) {
            dispatch(openQuestion.actions.result(!IsOpen));
        }
    }

    const onClick = (elem, correct) => {
        const nextQuestion = currentQuestion + 1;
        const mapSize = map && map.size;

        console.log('nextQuestion', nextQuestion)

        if (elem === correct) {
            dispatch(currentAnswer.actions.result(1));
        }
        if (nextQuestion < mapSize) {
            dispatch(currentQuestions.actions.result(1));
        } else {
            dispatch(showScore.actions.result(!show));

            setTimeout(() => {
                axios
                    .post('http://localhost:3001/results', {value: rightAnswers})
                    .then(r => console.log(r.status))
                    .catch(() => {
                        alert('An error occurred');
                    })
            }, 1000);
        }
    }

    return (
        <div className={'test-card'}>
            <h1 className={'title'}>Check Yourself</h1>
            <div className={'open-test'}>
                {!IsOpen && (
                    <div className={'mode_container'}>
                        <div className={'mode_items'}>
                            <button
                                className={mode === 'PAIRS' ? 'mode_item selected' : 'mode_item'}
                                onClick={() => setMode("PAIRS")} >
                                PAIRS
                            </button>
                            <button className={mode === 'FLIPCARD' ? 'mode_item selected' : 'mode_item'}
                                 onClick={() => setMode("FLIPCARD")}
                            >
                                FLIPCARD
                            </button>
                        </div>
                        <button
                            className={'button__pink-gradient'}
                            onClick={() => dispatch(openQuestion.actions.result(!IsOpen))}>
                            START</button>
                    </div>
                )}
                {IsOpen && !show && (
                    <div className={'open-test_question'}>
                        <img
                            className={'arrow__svg'}
                            onClick={onClose}
                            src={arrowBack}
                            alt="Arrow"/>
                        {mode === "PAIRS" && (
                            <Question word={Array.from(quizModel.keys())[currentQuestion]}
                                      answers={Array.from(quizModel.values())[currentQuestion]}
                                      correct={map.get(Array.from(quizModel.keys())[currentQuestion])}
                                      onClick={onClick}/>
                        )}
                        {mode === "FLIPCARD" && (
                            <FlipCard word={Array.from(quizModel.keys())[currentQuestion]}
                                      correct={map.get(Array.from(quizModel.keys())[currentQuestion])}
                                      onClick={() => console.log("FLIPCARD")}/>
                        )}
                    </div>
                )}
                {show && (
                    <div className={'open-test_results'}>
                        <img
                            className={'arrow__svg'}
                            onClick={onClose}
                            src={arrowBack}
                            alt="Arrow"/>
                        <h2>Your Result</h2>
                        <p>{`${rightAnswers * 10}%`}</p>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Test;