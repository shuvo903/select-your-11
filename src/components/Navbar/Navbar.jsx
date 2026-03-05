import React from 'react';
import navImg from "../../assets/logo.png"
import currency from "../../assets/Currency.png"

const Navbar = () => {
    return (
        <div>
            <div className="navbar max-w-300 mx-auto">
                <div className="flex-1">
                    <a className="text-xl"><img className=' w-16 h-16' src={navImg} alt="" /></a>
                </div>
                <div className="flex items-center gap-2">
                    <span>60000000000</span>
                    <img src={currency} alt="currency image" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;