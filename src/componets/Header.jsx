import React from 'react'
import p1 from '../assets/p1.png'
import { Instagram, Twitter, Flame, MessageCircle } from 'lucide-react';


export default function Header() {
    return (
        <header className="fixed top-4 left-0 right-0 z-50 px-4">
            <div className="bg-[#1c1c1e] rounded-full px-6 py-3 shadow-md flex items-center justify-between max-w-7xl mx-auto w-full">

                {/* Left: Logo + Nav */}
                <div className="flex items-center gap-6">
                    {/* Logo */}
                    <div className="flex text-white cursor-pointer items-center gap-2">
                        <img src={p1} alt="logo" className="w-28 md:w-32 h-auto leading-none" />
                    </div>

                    {/* Nav items - Ẩn trên mobile */}
                    <div className="hidden md:flex items-center gap-4 cursor-pointer">
                        <div className="flex items-center gap-2 mt-1 text-gray-400 hover:text-gray-200 transition-colors">
                            <span className="leading-none">Product</span>
                            <span className="leading-none bg-gray-700 rounded px-1 text-sm">▼</span>
                        </div>
                        <div className="text-gray-400 mt-1 hover:text-gray-200 leading-none transition-colors">
                            Pricing
                        </div>
                        <div className="text-gray-400 mt-1 hover:text-gray-200 leading-none transition-colors">
                            ITF ↗
                        </div>
                    </div>
                </div>

                {/* Right: Icons + Buttons */}
                <div className="flex items-center gap-3">
                    {/* Social Icons */}
                    <div className="hidden sm:flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 hover:text-indigo-400 cursor-pointer transition" />
                        <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer transition" />
                        <Twitter className="w-5 h-5 hover:text-sky-400 cursor-pointer transition" />
                        <Flame className="w-5 h-5 hover:text-orange-500 cursor-pointer transition" />
                    </div>

                    {/* Buttons */}
                    <button className="hidden sm:block border border-white/30 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-sm text-gray-300 hover:bg-white/10 transition">
                        Log in
                    </button>
                    <button className="px-4 md:px-6 py-1.5 md:py-2 bg-blue-600 hover:bg-blue-700 text-sm font-medium rounded-full transition">
                        Drip it
                    </button>
                </div>
            </div>
        </header>

    );
};




