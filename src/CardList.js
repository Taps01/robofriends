import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
        robots.map((user, ir) => {
        return (
        <Card 
        key={ir} 
        id={robots[ir].id} 
        name={robots[ir].name} 
        email={robots[ir].email}
        />
    );
    })
}
      </div>
    );
}

export default CardList;