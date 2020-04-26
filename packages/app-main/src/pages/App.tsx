import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../logo.svg';
import './App.css';
import { Layout } from 'antd';
import useHelloWorld from '../hooks/userFetchNote';
import Text from '../components/text';
import Note from './note';
const { Header, Content } = Layout;
function App() {
  const { content } = useHelloWorld();
  console.log('content', content)
  return (
    <>
      <Header>
        NoteBook
      </Header>
      <Content style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div>
          <Route></Route>
          {(content as any).data && (content as any).data.map((it: any) => {
            return <Text>{it.title}</Text>
          })}
        </div>
      </Content>
    </>
  );
}

const RouteApp = () => {
  return (<Router>
    <ul>
      <li><Link to="./note"> to Note</Link></li>
      <li><Link to="./app">to Home</Link></li>
    </ul>
    <Switch>
      <Route route="./note">
        <Note1/>
      </Route>
      <Route route="./app">
        <App1/>
      </Route>
    </Switch>
  </Router>);
}

function Note1() {
  return (<div>
    <h1>Note1</h1>
  </div>);
}

function App1(){
  return (<div>
    <h1>App1</h1>
  </div>);
}

export default RouteApp;
