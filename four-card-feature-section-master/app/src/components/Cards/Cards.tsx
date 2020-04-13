import React from 'react';

import { useStringsContext } from '../../context/StringsContext';
import CalculatorIcon from '../../assets/images/icon-calculator.svg'
import KarmaIcon from '../../assets/images/icon-karma.svg'
import SupervisorIcon from '../../assets/images/icon-supervisor.svg'
import TeamBuilderIcon from '../../assets/images/icon-team-builder.svg'
import Card from '../Card';

interface CardStringEntry {
  id: string
  title: string
  body: string
}

function Cards() {
  //@ts-ignore
  const cards = useStringsContext().cards as Array<CardStringEntry>

  return (
    <main>
      {cards.map(renderCard)}
    </main>
  )
}

const COLOR_ACCENTS = ["cyan", "red", "orange", "blue"];

function renderCard({ id, title, body }: CardStringEntry, index: number): JSX.Element {
  return <Card key={id} title={title} body={body} iconSrc={getIcon(id)} accent={COLOR_ACCENTS[index]} />
}

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
