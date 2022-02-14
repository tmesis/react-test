import './App.css';
import React from "react";


const numbers = [1, 2, 3, 4, 5];


function NumberList({numbers}) {
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}


function App() {
    return <NumberList numbers={numbers}/>
}

export default App;
