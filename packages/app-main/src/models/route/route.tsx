import {
BrowserRouter as Router,
Route,
Link,
Switch
} from 'react-router-dom';
import React from 'react';
import AddNote from '../../pages/note/addNote';
import Home from '../../pages/app';

export default function BasicRouter(){
    return (<Router>
            <Switch>
                <Route path="/addNote">
                    <AddNote/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>);
}