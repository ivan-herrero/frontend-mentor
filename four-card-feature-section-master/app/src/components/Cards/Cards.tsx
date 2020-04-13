import React from 'react';

import { useStringsContext } from '../../context/StringsContext';
import CalculatorIcon from '../../assets/images/icon-calculator.svg'
import KarmaIcon from '../../assets/images/icon-karma.svg'
import SupervisorIcon from '../../assets/images/icon-supervisor.svg'
import TeamBuilderIcon from '../../assets/images/icon-team-builder.svg'
import Card from '../Card';
import styles from './Cards.module.scss';
import { CardProps } from '../Card/Card';

interface CardStringEntry {
  id: string
  title: string
  body: string
}

function Cards() {
  //@ts-ignore
  const cards = useStringsContext().cards as Array<CardStringEntry>

  function renderCard(index: number): JSX.Element {
    const { id, title, body } = cards[index];

    const iconSrc = getIcon(id);
    const accent = COLOR_ACCENTS[index];
    const props: CardProps = {title, body, iconSrc, accent};

    return <Card {...props} />
  }

  return (
    <main className={styles.cards}>
      {renderCard(0)}
      <div className={styles.midColumn}>
        {renderCard(1)}
        {renderCard(2)}
      </div>
      {renderCard(3)}
    </main>
  )
}

const COLOR_ACCENTS = ["cyan", "red", "orange", "blue"];

function getIcon(id: string) {
  switch (id) {
    case 'calculator':
      return CalculatorIcon;
    case 'karma':
      return KarmaIcon;
    case 'supervisor':
      return SupervisorIcon;
    case 'team-builder':
      return TeamBuilderIcon
    default:
      throw new Error(`Can't find icon for card with id ${id}`)
  }
}


export default Cards;
