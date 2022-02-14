import './App.css';
import React from "react";


class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.type === 'checkbox' ? target.checked : target.value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}/>
                </label>
            </form>
        );
    }
}


function App() {
    return <Reservation/>
}

export default App;
