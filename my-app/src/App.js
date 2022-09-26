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
            .then(r => console.log("Krasava!"));
    }

    const onEditList = (id, key, value) => {
        // const newTaskText = window.prompt('Текст задачи', `${key} - ${value}`);
        // console.log(`${key} - ${value}`);
        // // console.log(lists)
        //
        // if (!newTaskText) {
        //     return;
        // }
        //
        // const newItem = lists.map(item => {
        //     if (Object.keys(item)[1] === key) {
        //         item[key] = newTaskText;
        //     }
        //     return item;
        // });
        // const itemKey = Object.keys(newItem)[1];
        // setLists(lists);

        const newList = lists.filter(item => item.id !== id);
        axios
            .delete('http://localhost:3001/words/' + id)
            .catch(() => {
                alert('Can\'t delete word!');
            });
        setLists(newList);
    };

    return (
        <div className="App">
            <div className="wrap">
                <div className={'dictionary'}>
                    <div className={'dictionary__sidebar'}>
                        <Navbar/>
                    </div>
                    <div className={'dictionary__interactive'}>
                        <Routes>
                            <Route path='/' element={<Home onEdit={onEditList} list={lists}/>}/>
                            <Route path='/add_words' element={<AddWords addWord={onAddWord}/>}/>
                            <Route path='/test' element={<Test/>}/>
                            <Route path='/stats' element={<Statistics/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
