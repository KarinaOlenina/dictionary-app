import React, { useState } from "react";
import './FlipCard.scss'
import axios from "axios";

const FlipCard = ({ word, correct, onClick }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [knowCount, setKnowCount] = useState(0);

    const handleKnowClick = () => {
        setKnowCount(knowCount + 1);
    };

    const handleDontKnowClick = () => {
        // Можете також виконати необхідні дії, коли користувач відмовляється від слова.
    };

    return (
        <div className="flip-card_container">
            <div className={`flip-card ${isFlipped ? "flipped" : ""}`}
                 onClick={() => setIsFlipped(!isFlipped)}>
                <div className="flipcard-front" >
                    {word}
                </div>
                <div className="flipcard-back" >
                    {correct}
                </div>
            </div>
            <div className="know-buttons">
                <button onClick={handleKnowClick}>I know</button>
                <button onClick={handleDontKnowClick}>I don't know</button>
            </div>
            <div className="next-button">
                <button onClick={() => onClick(knowCount)}>Next --></button>
            </div>
        </div>
    );
};

export default FlipCard;
