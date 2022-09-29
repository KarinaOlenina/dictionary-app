import React, {useState} from "react";
import axios from "axios";

import './Test.scss'
import Question from "./Question";

import {useDispatch, useSelector} from "react-redux";
import {currentAnswer} from "../../redux/reducers/currentAnswer";
import {openQuestion} from "../../redux/reducers/openQuestion";
import {currentQuestions} from "../../redux/reducers/currentQuestion";



const Test = ({quizModel, map}) => {

    const [showScore, setShowScore] = useState(false);

    const rightAnswers = useSelector((state) => state.currentAnswer.value);
    const IsOpen = useSelector((state) => state.openQuestion.value);
    const currentQuestion = useSelector((state) => state.currentQuestion.value);

    const dispatch = useDispatch()

    const onClose = () => {
        const ask = window.confirm('Ви впевнені, що хочете закрити тест?');
        if (ask) {
            dispatch(openQuestion.actions.result(!IsOpen));
        }
    }

    const onClick = (elem, correct) => {

        const nextQuestion = currentQuestion + 1;
        const mapSize = map && map.size;

        if (elem === correct) {
            dispatch(currentAnswer.actions.result(1));
        }

        if (nextQuestion < mapSize) {
            dispatch(currentQuestions.actions.result(1));
        } else {
            setShowScore(!showScore);

            setTimeout(() => {
                axios
                    .post('http://localhost:3001/results', {value: rightAnswers})
                    .then(r => console.log(r.status))
                    .catch(() => {
                        alert('Виникла помилка');
                    })
            }, 1000);
        }
    }

    return (
        <div className={'test-card'}>
            <h1 className={'test-card_title'}>Повторити слова </h1>
            <div className={'open-test'}>
                {!IsOpen && (
                    <button
                        className={'butt_start'}
                        onClick={() => dispatch(openQuestion.actions.result(!IsOpen))}>
                        Розпочати</button>
                )}
                {IsOpen && !showScore && (
                    <div className={'open-test_question'}>
                        <button
                            className={'butt_back'}
                            onClick={onClose}
                        >Повернутися
                        </button>
                        <h2 className={'question_title'}>Оберіть правильну відповідь:</h2>
                        <Question word={Array.from(quizModel.keys())[currentQuestion]}
                                  answers={Array.from(quizModel.values())[currentQuestion]}
                                  correct={map.get(Array.from(quizModel.keys())[currentQuestion])}
                                  onClick={onClick}
                        />
                    </div>
                )}
                {showScore && (
                    <div className={'open-test_results'}>
                        <h2>Твій результат</h2>
                        <p>{`${rightAnswers * 10}%`}</p>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Test;