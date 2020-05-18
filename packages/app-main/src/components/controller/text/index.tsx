import React from 'react';
import classNames from 'classnames';

type Pattern = 'normal';

export default function Text({
  pattern,
  text
}: {
  pattern: Pattern,
  text: string;
}) {

  return <span>
    {text}
  </span>
}
