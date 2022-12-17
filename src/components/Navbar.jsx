import React, { useState } from "react";
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    const [Nav, setNav] = useState(false)
    const handleClick = () => setNav(!Nav)
    const handleClose = () => setNav(!Nav)

    return (
        <div className="w-screen h-[80px] z-10 bg-col2 text-col5 fixed drop-shadow-lg">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl text-col5">Protop</h1>
                    <ul className="hidden md:flex">
                        <li><Link to="home" smooth={true} duration={-200}>Home</Link></li>
                        <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                        <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                        <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                        <li><Link to="about" smooth={true} offset={-50} duration={500}>About</Link></li>
                    </ul>
                </div>
                <div className="hidden md:flex">
                    <button className="text-col5 border-none pr-4 hover:underline hover:text-col5 hover:bg-transparent">Sign In</button>
                    <button className="duration-500 ease-in-out h-10 w-20 bg-col5 text-col1 hover:bg-col2 hover:border-col5 hover:text-col5">Sign Up</button>
                </div>
                <div className='md:hidden mr-4' onClick={handleClick}>
                    {!Nav ? <FaBars className='w-5' /> : <FaWindowClose className='w-5' />}

                </div>
            </div>
            <ul className={!Nav ? 'hidden' : 'absolute bg-col1 text-col4 w-full px-8'}>
                <li className="border-b-2 border-col2 w-full"><Link onClick={handleClose} to="home" smooth={true} duration={-200}>Home</Link></li>
                <li className="border-b-2 border-col2 w-full"><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                <li className="border-b-2 border-col2 w-full"><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                <li className="border-b-2 border-col2 w-full"><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                <li className="border-b-2 border-col2 w-full"><Link onClick={handleClose} to="about" smooth={true} offset={-50} duration={500}>About</Link></li>
                <div className="flex flex-col my-4">
                    <button className="px-8 py-3 mb-4 border border-col4 text-col4 hover:text-col5 hover:border-col5 hover:bg-transparent">Sign In</button>
                    <button className="px-8 py-3">Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;