import React from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt={`weird friend ${props.id}`} src={`https://robohash.org/set_set5/${props.id}?200x200`} />
        <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;