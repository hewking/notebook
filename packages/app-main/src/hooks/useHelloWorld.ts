
import { useEffect, useRef, useState } from 'react';
import config from '../config';

function useHelloWorld() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/', {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        return response.json();
      }).then(data => {
        setContent(data);
      })
  });

  return {
    content,
  }
}

export default useHelloWorld;