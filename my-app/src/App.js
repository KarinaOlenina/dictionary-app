import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";

import axios from "axios";

import Navbar from "./components/Navbar/Navbar";

import Home from './pages/Home/Home';
import AddWords from './pages/AddWords/AddWords';
import Test from './pages/Test/Test';
import Statistics from './pages/Statistics/Statistics';


function App() {

    const [lists, setLists] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3001/words')
            .then(({data}) => {
                setLists(data);
            });
    }, []);

    const onAddWord = (engValue, ukrValue) => {
        let obj = {};
        obj[engValue] = ukrValue;

        axios
            .post('http://localhost:3001/words', obj)
            .catch(() => {
                alert('Не вдалося додати слово');
            })
    }

    const onRemoveWord = (id) => {

        const newList = lists.filter(item => item.id !== id);
        axios
            .delete('http://localhost:3001/words/' + id)
            .catch(() => {
                alert('Не вдалося видалити слово');
            });
        setLists(newList);
    };

    let map;
    if (lists) {
        const shuffled = lists.sort(() => 0.5 - Math.random());
        let selectedQuest = shuffled.slice(0, Math.min(shuffled.length, 10));

        map = new Map();
        for (let pair of selectedQuest) {
            map.set(Object.keys(pair)[0], Object.values(pair)[0]);
        }
    }

    let quizModel;
    if (map) {
        quizModel = new Map();
        for (let mapElement of map.entries()) {
            let allAnswersList = Array.from(map.values())
                .filter(val => val !== mapElement[1])
                .sort(() => 0.5 - Math.random());
            let answers = [mapElement[1], ...allAnswersList.slice(0, 3)];
            quizModel.set(mapElement[0], answers.sort(() => 0.5 - Math.random()));
        }
        // console.log(quizModel);
    }

    return (
        <div className="App">
            <div className="wrap">
                <div className={'dictionary'}>
                    <div className={'dictionary__sidebar'}>
                        <Navbar/>
                    </div>
                    <div className={'dictionary__interactive'}>
                        <Routes>
                            <Route path='/' element={<Home onRemove={onRemoveWord} list={lists}/>}/>
                            <Route path='/add_words' element={<AddWords addWord={onAddWord}/>}/>
                            <Route path='/test' element={<Test map={map} quizModel={quizModel} list={lists}/>}/>
                            <Route path='/stats' element={<Statistics/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
