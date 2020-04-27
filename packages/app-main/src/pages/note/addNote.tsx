import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router';

export default function AddNote(){
    const history = useHistory();
    return (<div onClick={() => {
        history.push({
            pathname:"/",
            state: {
                from :"addNote"
            }
        });
    }}>
        <Button>
            to Home
        </Button>
<h2>from {(history.location!.state! as any).from}</h2>
        <h2>add Note Page</h2>
    </div>);
}