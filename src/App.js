import './App.css';
import React from "react";


function FancyBorder({color, children}) {
    return (
        <div className={'FancyBorder FancyBorder-' + color}>
            {children}
        </div>
    );
}

function Dialog({title, message, children}) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{title}</h1>
            <p className="Dialog-message">{message}</p>
            {children}
        </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: ''};
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program" message="How should we refer to you?">
                <input value={this.state.login}
                       onChange={this.handleChange}
                />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }

    handleChange = (event) => {
        this.setState({login: event.target.value});
    }

    handleSignUp = () => {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}


function App() {
    return <SignUpDialog/>
}

export default App;
