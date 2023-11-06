import axios from "axios";
import {showScore} from "../redux/reducers/showScore";
import {currentQuestions} from "../redux/reducers/currentQuestion";

const getNextWorld = (nextQuestion, mapSize, dispatch, show, rightAnswers) => {
    if (nextQuestion < mapSize) {
        dispatch(currentQuestions.actions.result(1));
    } else {
        dispatch(showScore.actions.result(!show));

        setTimeout(() => {
            axios
                .post('http://localhost:3001/results', { value: rightAnswers })
                .then(r => {
                    console.log(r.status);
                })
                .catch(() => {
                    alert('An error occurred');
                });
        }, 1000);
    }
};

export default getNextWorld;
