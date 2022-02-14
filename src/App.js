import './App.css';
import React from "react";


const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li>{number}</li>
);


function App() {
    return <ul>{listItems}</ul>
}

export default App;
