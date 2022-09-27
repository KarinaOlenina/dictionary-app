import React, {useState} from "react";

import './Test.scss'
import Question from "./Question";

import {useDispatch, useSelector} from "react-redux";
import {stats} from "../../redux/reducers/stats";
import axios from "axios";


const Test = ({quizModel, map}) => {


    const [open, setOpen] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const count = useSelector((state) => state.stats.value);

    const dispatch = useDispatch()

    const onClose = () => {
        const ask = window.confirm('Ви впевнені, що хочете закрити тест?');
        if (ask) {
            setOpen(!open)
        }
    }

    const onClick = (elem, correct) => {

        const nextQuestion = currentQuestion + 1;
        const mapSize = map && map.size;

        if (elem === correct) {
            setSelectedAnswer(selectedAnswer + 1);
        }

        if (nextQuestion < mapSize) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(!showScore);
            dispatch(stats.actions.result(selectedAnswer));

            setTimeout(() => {
                axios
                    .post('http://localhost:3001/results', {value: selectedAnswer})
                    .then(r => console.log(r.status))
                    .catch(() => {
                        alert('Виникла помилка');
                    })
            }, 5000);
        }
    }

    // useEffect(() => {
    //
    //     axios
    //         .post('http://localhost:3001/results', {value: count})
    //         .catch(() => {
    //             alert('Виникла помилка');
    //         })
    // }, [count]);

    // console.log(`сч слов=> ${currentQuestion}`);
    console.log(`сч ответов => ${selectedAnswer}`);
    // console.log(count)


    return (
        <div className={'test-card'}>
            <h1>Повторити слова </h1>
            <div className={'open-test'}>
                {!open && (
                    <button
                        className={'butt_start'}
                        onClick={() => setOpen(!open)}>
                        Розпочати</button>
                )}
                {open && !showScore &&(
                    <div className={'open-test_question'}>
                        <button
                            className={'butt_back'}
                            onClick={onClose}
                        >Повернутися
                        </button>
                        <h3>Оберіть правильну відповідь:</h3>
                        <Question word={Array.from(quizModel.keys())[currentQuestion]}
                                  answers={Array.from(quizModel.values())[currentQuestion]}
                                  correct={map.get(Array.from(quizModel.keys())[currentQuestion])}
                                  onClick={onClick}
                        />
                    </div>
                )}
                {showScore && (
                    <div className={'open-test_results'}>
                        <h1>Молодець </h1>
                        <h2>Твій результат</h2>
                        <p>{`${selectedAnswer * 100 / 10}%`}</p>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Test;