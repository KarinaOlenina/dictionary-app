import './Question.scss'
import WordInput from "../WordInput/WordInput";
import Arrow from "../../assets/Arrow.svg";
import {useDispatch, useSelector} from "react-redux";
import {currentAnswer} from "../../redux/reducers/currentAnswer";
import getNextWorld from "../../utils/getNextWorld";

const Question = ({word, answers, correct, map}) => {
    const dispatch = useDispatch();
    const show = useSelector((state) => state.showScore.value);

    const { value: rightAnswers } = useSelector((state) => state.currentAnswer);
    const { value: currentQuestion } = useSelector((state) => state.currentQuestion);
    const nextQuestion = currentQuestion + 1;
    const mapSize = map?.size;

    const handleQuestionClick = (elem, correct) => {
        if (elem === correct) {
            dispatch(currentAnswer.actions.result(1));
        }
        getNextWorld(nextQuestion, mapSize, dispatch, show, rightAnswers);
    }


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
                    <div onClick={() => handleQuestionClick(elem, correct)} key={elem}>
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