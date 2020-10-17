import React from 'react';
import Card from './../Card/Card.component';

export const CardList = (props) => {
  return (
    props.monsters.map((monster) =>
      (
        <Card key={monster.id} monster={monster} />
      )
    )
  )
}

export default CardList;