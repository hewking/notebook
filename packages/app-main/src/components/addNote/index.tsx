import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router';

export default function AddNote() {
    const history = useHistory();

    const addNote = () => {
        // TODO('add note)
    };

    return (<div onClick={addNote}>
        <Button onClick={() => {
            console.log(history);
            history.push({
                pathname: "/",
                state: {
                    from: "addNote",
                }
            });
        }}>
            to Home
        </Button>
        <h2>from {''}</h2>
        <h2>add Note Page</h2>
    </div>);
}