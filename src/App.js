import './App.css';
import React from "react";


function FancyBorder({color, children}) {
    return (
        <div className={'FancyBorder FancyBorder-' + color}>
            {children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
        </FancyBorder>
    );
}


function App() {
    return <WelcomeDialog/>
}

export default App;
