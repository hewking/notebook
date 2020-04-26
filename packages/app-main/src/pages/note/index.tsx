import React from 'react';
import './index.css';
import {Layout} from 'antd';

const {Header,Content} = Layout;

const Note = React.memo(() => {
    return (<>
        <Header>
            NoteBook
        </Header>
        <Content>
            <span>Note List</span>
        </Content>
    </>);
});

export default Note;