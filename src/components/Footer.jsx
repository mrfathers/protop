import React from "react";
import { FaInstagram, FaGithub, FaFacebook, FaTwitter, FaTwitch } from "react-icons/fa";

const Footer = ()=>{
    return(
        <div className="w-full mt-24 bg-col5 text-col1 py-2 px-2">
            <div className="grid grid-cols-2 max-w-[1240px] mx-auto md:grid-cols-6 border-b-2 border-col1 py-8">
                <div>
                    <h6 className="font-bold uppercase pt-2">Solutions</h6>
                    <ul>
                        <li className="py-1">Marketing</li>
                        <li className="py-1">Analytics</li>
                        <li className="py-1">Commerce</li>
                        <li className="py-1">Data</li>
                        <li className="py-1">Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Support</h6>
                    <ul>
                        <li className="py-1">Pricing</li>
                        <li className="py-1">Dumentation</li>
                        <li className="py-1">Guides</li>
                        <li className="py-1">Api Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Company</h6>
                    <ul>
                        <li className="py-1">About</li>
                        <li className="py-1">Blog</li>
                        <li className="py-1">Jobs</li>
                        <li className="py-1">Press</li>
                        <li className="py-1">Partners</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Legal</h6>
                    <ul>
                        <li className="py-1">Claims</li>
                        <li className="py-1">Privacy</li>
                        <li className="py-1">Terms</li>
                        <li className="py-1">Policies</li>
                        <li className="py-1">Conditions</li>
                    </ul>
                </div>
                <div className="col-span-2 pt-8 md:pt-2">
                    <p className="font-bold uppercase">Subscribe to out newsletter</p>
                    <p className="py-4">The latest news, articles and new resources, sent to your inbox weakly</p>
                    <form className="flex flex-col sm:flex-row">
                        <input className="rounded-md w-full p-2 mr-4 mb-4 text-col5" type='email' placeholder="Enter email..."/>
                        <button className="bg-col1 p-2 mb-4 duration-300 ease-in-out hover:border-col1">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col max-w-[1240px] px-2 py-4 items-center mx-auto justify-between sm:flex-row text-center">
                <p className="py-4">2022 WorkFlow, LLc. All rights reserve</p>
                <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                    <FaFacebook/>
                    <FaGithub/>
                    <FaInstagram/>
                    <FaTwitch/>
                    <FaTwitter/>
                </div>
            </div>
        </div>
    )
}

export default Footer;