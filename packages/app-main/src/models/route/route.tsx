import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import React from 'react';
import AddNote from '../../components/addNote';
import Home from '../../pages/App';

export default function BasicRouter() {
    return (<Router>
        <Switch>
            <Route path="/addNote">
                <AddNote />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>);
}