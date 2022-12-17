import React from "react";

const About = ()=>{
    return(
        <div name='about' className="w-full my-32">
            <div className="max-w-[1240px] mx-auto">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-col5">Trust developers around the world</h1>
                    <p className="text-3xl py-6 text-col4">my name is seyed serajoddin mir mohammadi from iran and love coding and designing website</p>
                </div>
                <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
                    <div className="border border-col1 py-8 rounded-xl shadow-xl hover:bg-col2 duration-700">
                        <p className="text-6xl font-bold text-col5">100%</p>
                        <p className="mt-2">Completion</p>
                    </div>
                    <div className="border border-col1 py-8 rounded-xl shadow-xl hover:bg-col2 duration-700">
                        <p className="text-6xl font-bold text-col5">24/7</p>
                        <p className="mt-2">Delivery</p>
                    </div>
                    <div className="border border-col1 py-8 rounded-xl shadow-xl hover:bg-col2 duration-700">
                        <p className="text-6xl font-bold text-col5">100K</p>
                        <p className="mt-2">Transactions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;