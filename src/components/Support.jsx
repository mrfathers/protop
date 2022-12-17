import React from "react";
import Supimg from '../Assets/Supporterimg.jpg';
import { HiOutlinePhone, HiOutlineAcademicCap } from 'react-icons/hi';
import { FaCompressArrowsAlt } from 'react-icons/fa';
import { BiChip, BiSupport } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';

const Support = ()=>{
    return(
        <div name='support' className="w-full h-screen mt-24">
            <div className="w-full h-[700px] bg-col2 absolute">
                <img className="w-full h-full object-cover mix-blend-overlay" src={Supimg} alt='/'/>
            </div>
            <div className="max-w-[1240px] mx-auto relative">
                <div className="px-4 py-12">
                    <h2 className="text-3xl uppercase text-center pt-8">Support</h2>
                    <h3 className="text-5xl py-6 text-center font-bold">Finding The Right Team</h3>
                    <p className="py-4 text-3xl">Teamworking everytime is stronger than a person and for that have to choose top persons for making a team. our strong supporter team is at your service tell theme to start the job</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20">
                <div className="bg-col2 rounded-xl shadow-2xl">
                    <div className="p-8">
                        <HiOutlinePhone className="text-5xl bg-col5 text-col1 rounded-lg mt-[-4rem]"/>
                        <h3 className="text-2xl font-bold my-6">Sales</h3>
                        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa doloribus eligendi modi maiores perspiciatis error numquam ex odio cumque? Corrupti?</p>
                    </div>
                    <div className="px-8 py-4 bg-col1">
                        <p className="flex items-center text-col5">Contact Us <BsArrowRightShort className="mt-1 mx-2"/></p>
                    </div>
                </div>
                <div className="bg-col2 rounded-xl shadow-2xl">
                    <div className="p-8">
                        <FaCompressArrowsAlt className="text-5xl bg-col5 text-col1 rounded-lg mt-[-4rem]"/>
                        <h3 className="text-2xl font-bold my-6">Technical Support</h3>
                        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa doloribus eligendi modi maiores perspiciatis error numquam ex odio cumque? Corrupti?</p>
                    </div>
                    <div className="px-8 py-4 bg-col1">
                        <p className="flex items-center text-col5">Contact Us <BsArrowRightShort className="mt-1 mx-2"/></p>
                    </div>
                </div>
                <div className="bg-col2 rounded-xl shadow-2xl">
                    <div className="p-8">
                        <BiChip className="text-5xl bg-col5 text-col1 rounded-lg mt-[-4rem]"/>
                        <h3 className="text-2xl font-bold my-6">Media Enquiries</h3>
                        <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa doloribus eligendi modi maiores perspiciatis error numquam ex odio cumque? Corrupti?</p>
                    </div>
                    <div className="px-8 py-4 bg-col1">
                        <p className="flex items-center text-col5">Contact Us <BsArrowRightShort className="mt-1 mx-2"/></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;