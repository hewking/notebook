import React from 'react';

export default function Text(props: any) {
  return <span {...props}>
    {props.children}
  </span>
}
