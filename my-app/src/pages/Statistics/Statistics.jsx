import React, {useEffect, useState} from "react";
import axios from "axios";

import './Statistic.scss'

const Statistics = () => {
    const [results, setResults] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3001/results')
            .then(({data}) => {
                setResults(data);
            });
    }, []);

    let statVal;
    if (results) {
        let sum = 0;
        for (let result of results) {
            sum += Object.values(result)[0];
        }

        statVal = sum / results.length;
    } else {
        statVal = 0;
    }

    return (
        <div className={'stats'}>
            <h1 className={'stats_title'}>Твоя статистика:</h1>
            <p className={'stats_percent'}>{`${(statVal * 10).toFixed(1)}%`}</p>
        </div>
    )
}

export default Statistics;