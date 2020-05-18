import React from 'react';
import classNames from 'classnames';
import styles from './text.module.scss';

type Pattern = 'normal';

export default function HText({
  pattern,
  text
}: {
  pattern: Pattern,
  text: string;
}) {

  return <span className={styles.text}>
    {text}
  </span>
}
