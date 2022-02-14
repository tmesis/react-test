import './App.css';
import React from "react";


function BoilingVerdict({celsius}) {
    if (celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {temperature: ''};
    }

    handleChange = (event) => {
        this.setState({temperature: event.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}/>
                <BoilingVerdict
                    celsius={parseFloat(temperature)}/>
            </fieldset>
        );
    }
}


function App() {
    return <Calculator/>
}

export default App;
