import React from "react";

import './WordInput.scss';

const WordInput = ({ value, key, type }) => {


    return (
        <input
            readOnly={true}
            type={type}
            name={'input'}
            value={value}
            key={key}>
        </input>
    );
}

export default WordInput;