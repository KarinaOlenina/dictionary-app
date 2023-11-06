import React, { useEffect, useState } from "react";

import './Statistic.scss'
import axios from "axios";
import DonutChart from "../../components/DonutChart/DonutChart";

const Statistics = () => {
    const [results, setResults] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3001/results')
            .then(({data}) => {
                setResults(data);
            });
    }, []);


    let statusValue;
    if (results) {
        let sum = 0;
        for (let result of results) {
            sum += Object.values(result)[0];
        }

        statusValue = sum / results.length;
    } else {
        statusValue = 0;
    }
    let statistic = (statusValue * 10).toFixed(1);

    return (
        <div className={'stats'}>
            <h1 className={'stats_title'}>Statistic</h1>
            <DonutChart statistic={parseFloat(statistic)} />
        </div>
    )
}

export default Statistics;
