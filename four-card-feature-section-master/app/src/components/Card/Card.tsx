import React from 'react';
import classNames from 'classnames';

import styles from './Card.module.scss';

export interface CardProps {
  title: string
  body: string
  iconSrc: string
  accent: string
}

function Card({ title, body, iconSrc, accent }: CardProps) {
  const accentStyle = styles[`accent-${accent}`]

  return (
    <section className={classNames(styles.card, accentStyle)}>
      <h3>{title}</h3>
      <p>{body}</p>
      <div className={styles.iconWrapper}>
        <img src={iconSrc} alt="" />
      </div>
    </section>
  )
}

export default Card;
