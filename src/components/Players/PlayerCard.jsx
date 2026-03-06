import React, { useState } from 'react';
import userImg from '../../assets/user-1.png';
import flagImg from '../../assets/Group.png';
import { toast } from 'react-toastify';


const PlayerCard = ({ player, setAvailableBalance, availableBalance, choosedPleyers, setChoosedPleyers }) => {

    const [isSelected, setIsSelected] = useState(false)


    const handleSelected = (playerData) => {
        const playerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""))

        if (availableBalance < playerPrice) {
           toast ("Not enought coins!!!")
            return
        }

        if (choosedPleyers.length === 6) {
           toast ("6 Players already seleced")
            return
        }

        setIsSelected(true)
        setAvailableBalance(availableBalance - playerPrice)

        setChoosedPleyers([...choosedPleyers, playerData])
    }

    return (
        <div>
            <div className="card bg-base-100  shadow-sm p-4">
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
                        <button disabled={isSelected} onClick={() => { handleSelected(player) }} className="btn ">{isSelected === true ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;