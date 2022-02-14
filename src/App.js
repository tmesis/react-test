import './App.css';
import React from "react";


function Mailbox({unreadMessages}) {
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
// const messages = [];


function App() {
    return <Mailbox unreadMessages={messages}/>
}

export default App;
