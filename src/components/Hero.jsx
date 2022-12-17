import React from "react";
import bgImg from '../Assets/bgimg.png';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import { FaDatabase, FaServer } from 'react-icons/fa';
import { HiPaperAirplane } from 'react-icons/hi';

const Hero = ()=>{
    return(
        <div name='home' className="w-full h-screen bg-col2 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className="text-2xl">Make everythings that you want</p>
                    <h1 className="py-3 text-5xl font-bold md:text-7xl">Protop Company</h1>
                    <p className="text-2xl">tell our controler team</p>
                    <button className="duration-500 ease-in-out py-3 px-6 w-full sm:w-[60%] my-4">Get Started</button>
                </div>
                <div>
                    <img className="w-full" src={bgImg} alt='/'/>
                </div>
                <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] 
                mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-col2 
                border border-col2 rounded-xl text-center shadow-xl">
                    <p className="text-2xl font-bold">Data Services</p>
                    <div className="flex justify-between flex-wrap px-4">
                        <p className="px-4 py-2 flex"><BsFillCloudUploadFill className="h-6 text-col5 flex mx-2"/>App Security</p>
                        <p className="px-4 py-2 flex"><FaDatabase className="h-6 text-col5 flex mx-2"/>Dashboard Design</p>
                        <p className="px-4 py-2 flex"><FaServer className="h-6 text-col5 flex mx-2"/>Cloud Data</p>
                        <p className="px-4 py-2 flex"><HiPaperAirplane className="h-6 text-col5 flex mx-2"/>API</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;