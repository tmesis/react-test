import './App.css';
import React from "react";


const numbers = [1, 2, 3, 4, 5];


function ListItem({value}) {
    return <li>{value}</li>;
}

function NumberList({numbers}) {
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                          value={number}/>
            )}
        </ul>
    );
}


function App() {
    return <NumberList numbers={numbers}/>
}

export default App;
