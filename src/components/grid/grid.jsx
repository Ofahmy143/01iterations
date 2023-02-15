import './grid.css';
import OutlineCard from '../cards/outlineCard/outlineCard';
import { useState } from 'react';
function Grid({type , cards , gridID}) {
  let CardType = type ;
  return (
    <div className='grid' id={gridID !== undefined? gridID : null}>
      {cards.map((card,index) => (
      <CardType key={index}
        thumbnail={`${process.env.PUBLIC_URL}${card.thumbnail}`}
        courseTitle={card.title}
        courseDescription={card.shortDescription}
        id={card.id}
        />
      ))}





    </div>
  );
}

export default Grid;