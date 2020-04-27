import React from 'react';
import './index.css';
import { Layout } from 'antd';
import useFetchNote from '../../hooks/userFetchNote';
import { Note } from '../../models/note/note';

import { createHashHistory,createBrowserHistory } from 'history';
const { Header, Content } = Layout;

const histofy = createBrowserHistory();

const NotePage = React.memo(() => {

    const { notes } = useFetchNote();

    return (<div>
        {
            notes && notes.map(item => {
                return <NoteItem
                    key={item.id.toString()}
                    note={item} />
            })
        }
    </div>);
});

export const NoteItem = ({ note, key }: {
    note: Note,
    key: string,
}) => {
    return <div key={key}>
        <span>{note.title}</span>
        <span>{note.updatedAt}</span>
        <span>{note.content}</span>
    </div>
};

export default NotePage;