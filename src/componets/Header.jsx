import React from 'react'
import p1 from '../assets/p1.png'
import { Instagram, Twitter, Flame, MessageCircle } from 'lucide-react';


export default function Header() {
    return (
        <header className="fixed top-4  left-0 right-0 z-50">
            <div className="bg-[#1c1c1e] rounded-full px-6 py-3 shadow-md  flex items-center justify-between max-w-7xl mx-auto">

                <div className="flex  items-center gap-6">
                    <div className="flex text-white cursor-pointer items-center gap-2">
                        <img src={p1} alt="logo" className="w-32 h-auto leading-none" />
                        {/* <span className="font-bold text-2xl leading-none">Drippy<span className="text-white">.</span></span> */}
                    </div>


                    <div className="flex items-center gap-4 cursor-pointer">
                        <div className="flex items-center gap-3 mt-2 cursor-pointer text-gray-400 hover:text-gray-200 transition-colors">
                            <span className="leading-none">Product</span> <span className="leading-none bg-gray-700">▼</span>
                        </div>
                        <div href="#" className="text-gray-400 mt-2 hover:text-gray-200 leading-none transition-colors">Pricing</div>
                        <div href="#" className="text-gray-400 mt-2 hover:text-gray-200 leading-none transition-colors">ITF ↗</div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-3 cursor-pointer ">
                        <MessageCircle className="w-5 h-5 hover:text-indigo-400 cursor-pointer transition" />
                        <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer transition" />
                        <Twitter className="w-5 h-5 hover:text-sky-400 cursor-pointer transition" />
                        <Flame className="w-5 h-5 hover:text-orange-500 cursor-pointer transition" />
                    </div>
                    <button className="border border-white/30 px-10 py-2 rounded-full cursor-pointer text-sm text-gray-300 hover:bg-white/10 transition">
                        Log in
                    </button>
                    <button className="bg-blue-600 hover:bg-blue-700  cursor-pointer px-10 py-2 rounded-full text-sm font-medium transition">
                        Drip it
                    </button>
                </div>
            </div>
        </header>

    );
};




