import React, { use } from 'react';
import PlayerCard from '../Players/PlayerCard';

const AvailablePlayers = ({ playersPromise, setAvailableBalance, availableBalance, setChoosedPleyers, choosedPleyers }) => {

    const playersData = use(playersPromise);


    return (
        <div className='max-w-300 mx-auto gap-8 grid grid-cols-1 md:grid-cols-3'>

            {
                playersData.map(player => <PlayerCard key={player.id} setChoosedPleyers={setChoosedPleyers} choosedPleyers={choosedPleyers} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} player={player}></PlayerCard>)
            };
        </div>
    );
};

export default AvailablePlayers;