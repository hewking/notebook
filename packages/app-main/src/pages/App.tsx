import React from 'react';
import { Router, Route } from 'react-router'
import logo from '../logo.svg';
import './App.css';
import { Layout } from 'antd';
import useHelloWorld from '../hooks/userFetchNote';
import Text from '../components/text';
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

export default App;
