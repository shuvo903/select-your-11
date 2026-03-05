import React, { use } from 'react';
import userImg from '../../assets/user-1.png';
import flagImg from '../../assets/Group.png';

const AvailablePlayers = ({ playersPromise }) => {

    const playersData = use(playersPromise)

    console.log(playersData);


    // "id": 11,
    // "team": "Sylhet Strikers",
    // "player_image": "https://i.ibb.co.com/r1TGW44/imgi-66-637-camedia.png",
    // "player_name": "Shaheen Shah Afridi",
    // "player_country": "Pakistan",
    // "playing_role": "Bowler",
    // "rating": 9.4,
    // "bating_style": "Left-handed",
    // "bowling_style": "Left-arm fast",
    // "price": "820,000 USD"

    return (
        <div className='max-w-300 mx-auto gap-8 grid grid-cols-1 md:grid-cols-3'>

            {
                playersData.map(player => <div className="card bg-base-100  shadow-sm p-4">
                    <figure>
                        <img className='w-full h-110 object-cover'
                            src={player.player_image}
                            alt="Shoes" />
                    </figure>
                    <div className="mt-4">
                        <div className="flex gap-2">
                            <img src={userImg} alt="" />
                            <h2 className="card-title ml-2">{player.player_name}</h2>
                        </div>
                        <div className="flex justify-between mt-4 border-b-2 border-gray-400 pb-2">
                            <div className="flex items-center gap-2">
                                <img className='w-5 h-5' src={flagImg} alt="" />
                                <span>{player.player_country}</span>
                            </div>
                            <button className='btn'>{player.playing_role}</button>
                        </div>

                        <div className="flex justify-between font-bold">
                            <span>Reating</span>
                            <span>{player.rating}</span>
                        </div>
                        <div className="flex justify-between ">
                            <span className='font-bold'>{player.bating_style}</span>
                            <span>{player.bowling_style}</span>
                        </div>


                        <div className="card-actions mt-4 justify-between items-center">
                            <p className='font-bold'>Price: ${player.price}</p>
                            <button className="btn ">Choose Player</button>
                        </div>
                    </div>
                </div>)
            }



        </div>
    );
};

export default AvailablePlayers;