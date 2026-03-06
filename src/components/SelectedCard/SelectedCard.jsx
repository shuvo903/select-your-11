import React from 'react';
import removeImg from "../../assets/Frame.png";
const SelectedCard = ({ pleyer,removePlayer }) => {

const handleRemove = () => {
    removePlayer(
        pleyer
    )
}

    return (
        <div>
            <div className="border-2 border-gray-300 rounded-xl p-3 flex justify-between items-center mt-5">
                <div className="flex items-center gap-2
                ">
                    <img className='w-14 h-14 rounded-xl border object-cover' src={pleyer.player_image} alt="" />
                    <div className="">
                        <h1 className='text-xl font-bold'>{pleyer.player_name}</h1>
                        <p className='text-xs text-gray-400'>{pleyer.playing_role}</p>
                    </div>
                </div>
                <img onClick={handleRemove} src={removeImg} alt="" />
            </div>
        </div>
    );
};

export default SelectedCard;