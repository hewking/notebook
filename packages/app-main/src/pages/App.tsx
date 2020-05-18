import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import {
  createBrowserHistory,
  createHashHistory
} from 'history';
import { useHistory } from 'react-router';
import './App.css';
import { Layout, Button, message } from 'antd';
import Note from './note';
import AddNote from '../components/addNote';
const { Header, Content } = Layout;
function App() {

  const history = useHistory();

  const toAddNote = () => {
    console.log('toAddNote');
    history.push({
      pathname:"/addNote",
      state:{
        from:"home",
      }
    });
  };

  return (
    <>
      <Header>
        <h2>NoteBook</h2>
      </Header>
      <Content style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Router>
          <div>
            <nav>
              <Button onClick={toAddNote}>Add Note</Button>
              <Link to='/addNote'>to AddNote</Link>
            </nav>
            <Switch>
              <Route path='/addNote'>
                <AddNote/>
              </Route>
              <Route path="/">
                <Note />
              </Route>
            </Switch>
          </div>
        </Router>
      </Content>
    </>
  );
}

export default App;
