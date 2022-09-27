import React, {useEffect, useState} from "react";

import axios from "axios";

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
        console.log(results)
        let sum = 0;
        for (let result of results) {
            sum += Object.values(result)[0];
        }

        statVal = sum / results.length;
    } else {
        statVal = 0;
    }

    return (
        <div>
            <h1>Statistics</h1>
            <p>{`${(statVal * 10).toFixed(1)}%`}</p>
        </div>
    )
}

export default Statistics;