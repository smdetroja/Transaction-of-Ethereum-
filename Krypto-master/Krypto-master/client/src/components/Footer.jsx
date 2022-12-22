import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";

const Footer = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
        <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
            <div className="flex flex-[0.5] justify-center items-center">
                <Link to='/'><img src={logo} alt="logo" className="w-32" /></Link>
            </div>
            <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                <Link to='/blockchain'><p className="text-white text-base text-center mx-2 cursor-pointer">Learn Blockchain</p></Link>
                <Link to='/market'><p className="text-white text-base text-center mx-2 cursor-pointer">Market</p></Link>
                <Link to='/converter'><p className="text-white text-base text-center mx-2 cursor-pointer">Converter</p></Link>
                <Link to='/news'><p className="text-white text-base text-center mx-2 cursor-pointer">News</p></Link>
            </div>
        </div>

        <div className="flex justify-center items-center flex-col mt-5">
            <p className="text-white text-sm text-center">Come join us</p>
            <a href="mailto:info@krypt.com" className="text-white text-sm text-center font-medium mt-2">info@krypt.com</a>
        </div>

        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
            <p className="text-white text-left text-xs">smdetroja710@gmail.com</p>
            <p className="text-white text-right text-xs">All rights reserved</p>
        </div>
    </div>
);

export default Footer;