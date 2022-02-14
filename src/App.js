import './App.css';
import React from "react";


function FancyBorder({color, children}) {
    return (
        <div className={'FancyBorder FancyBorder-' + color}>
            {children}
        </div>
    );
}

function Dialog({title, message}) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{title}</h1>
            <p className="Dialog-message">{message}</p>
        </FancyBorder>
    );
}

function WelcomeDialog() {
    return (
        <Dialog
            title="Welcome"
            message="Thank you for visiting our spacecraft!"
        />
    );
}


function App() {
    return <WelcomeDialog/>
}

export default App;
