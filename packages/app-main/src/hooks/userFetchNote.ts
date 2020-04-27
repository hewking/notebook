
import { useEffect, useRef, useState } from 'react';
import config from '../config';
import { Note } from '../models/note/note';

function useFetchNote() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllNotes", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        return response.json();
      }).then(data => {
        setNotes(data.data);
      })
  },[]);

  return {
    notes,
  }
}

export default useFetchNote;