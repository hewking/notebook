import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { Layout } from 'antd';
const { Header, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Header>

      </Header>
      <Content style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div>
          Notebook
        </div>
      </Content>
    </div>
  );
}

export default App;
