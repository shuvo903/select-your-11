import React from 'react';

import SelectedCard from '../SelectedCard/SelectedCard';
const SelectedPlayers = ({ choosedPleyers,removePlayer }) => {

    return (
        <div className='max-w-300 mx-auto'>
{
    choosedPleyers.map(pleyer => <SelectedCard key={pleyer.id} removePlayer={removePlayer}  pleyer={pleyer}></SelectedCard>)
}
        </div>
    );
};

export default SelectedPlayers;