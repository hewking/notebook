import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { Layout } from 'antd';
import useHelloWorld from '../hooks/useHelloWorld';
const { Header, Content } = Layout;
function App() {
  const { content } = useHelloWorld();
  console.log('content', content)
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
        </div>
      </Content>
    </div>
  );
}

export default App;
