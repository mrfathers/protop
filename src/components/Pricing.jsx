import React from "react";
import { AiOutlineCheck } from 'react-icons/ai';

const Pricing = ()=>{
    return(
        <div name='pricing' className="w-full my-24">
            <div className="w-full h-[800px] absolute mix-blend-overlay bg-col2">

            </div>
            <div className="max-w-[1240px] mx-auto py-12">
                <div className="text-center py-8">
                    <h2 className="text-3xl uppercase">Pricing</h2>
                    <h3 className="text-5xl font-bold py-8">The Right Price For Your Research</h3>
                    <p className="text-3xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam odio molestiae dignissimos expedita, aspernatur facere impedit consequuntur quae consectetur est.</p>
                </div>
                <div className="grid grid-cols-2">
                    <div className="m-4 p-8 rounded-xl shadow-2xl bg-white relative">
                        <span className="uppercase px-3 py-1 bg-col5 text-col1 text-sm rounded-2xl">Standard</span>
                        <div>
                            <p className="text-6xl font-bold py-4 flex">49$<span className="text-xl flex flex-col justify-end">/mo</span></p>
                        </div>
                        <div>
                            <p className="text-2xl py-8">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="text-2xl relative">
                            <p className="flex py-4"><AiOutlineCheck className="w-8 mr-5 text-green"/>Lorem, ipsum dolor.</p>
                            <p className="flex py-4"><AiOutlineCheck className="w-8 mr-5 text-green"/>Lorem, ipsum dolor.</p>
                            <p className="flex py-4"><AiOutlineCheck className="w-8 mr-5 text-green"/>Lorem, ipsum dolor.</p>
                            <p className="flex py-4"><AiOutlineCheck className="w-8 mr-5 text-green"/>Lorem, ipsum dolor.</p>
                            <p className="flex py-4"><AiOutlineCheck className="w-8 mr-5 text-green"/>Lorem, ipsum dolor.</p>
                            <button className="bg-col5 text-col1 hover:text-col5 hover:bg-col1 w-full py-4 my-4 duration-300 ease-in-out">Get Started</button>
                        </div>
                    </div>
                    <div className="m-4 p-8 rounded-xl shadow-2xl bg-white relative border border-gold">
                        <span className="uppercase px-3 py-1 bg-gold text-col1 text-sm rounded-2xl">Premium</span>
                        <div>
                            <p className="text-6xl font-bold py-4 flex">99$<span className="text-xl flex flex-col justify-end">/mo</span></p>
                        </div>
                        <div>
                            <p className="text-2xl py-8">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                        </div>
                        <div className="text-2xl relative">
                            <p className="flex py-4"><AiOutlineCheck className="w-8 mr-5 text-green"/>Lorem, ipsum dolor.</p>
                            <p className="flex py-4"><AiOutlineCheck className="w-8 mr-5 text-green"/>Lorem, ipsum dolor.</p>
                            <p className="flex py-4"><AiOutlineCheck className="w-8 mr-5 text-green"/>Lorem, ipsum dolor.</p>
                            <p className="flex py-4"><AiOutlineCheck className="w-8 mr-5 text-green"/>Lorem, ipsum dolor.</p>
                            <p className="flex py-4"><AiOutlineCheck className="w-8 mr-5 text-green"/>Lorem, ipsum dolor.</p>
                            <button className="bg-gold text-col1 border-gold hover:text-gold hover:bg-col1 w-full py-4 my-4 duration-300 ease-in-out">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;