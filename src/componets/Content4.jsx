import React from 'react'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import p9 from '../assets/p9.png'
import p10 from '../assets/p10.png'
import p12 from '../assets/p12.png'
import p13 from '../assets/p13.png'
import p14 from '../assets/p14.png'
import p15 from '../assets/p15.png'
import p16 from '../assets/p16.png'
import p17 from '../assets/p17.png'







export default function Content4() {
    const images = [
        p7, p8, p9, p10, p12, p13, p14, p15, p16
    ];
    return (
        <div className="flex flex-col items-center min-h-screen text-white mt-10 rounded-3xl mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-start justify-between text-white py-16 pr-6 rounded-3xl w-full mt-20 gap-22">
                <div className="relative max-w-[1200px] mx-auto">
                    {/* Grid ảnh nhỏ */}
                    <div className="grid grid-cols-3 gap-12 md:pl-0 pl-4">
                        {images.map((src, i) => (
                            <div
                                key={i}
                                className="w-28 h-28 md:w-36 md:h-36 p-5 bg-[#1e1e20] border border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden"
                            >
                                <img
                                    src={src}
                                    alt={`img-${i}`}
                                    // Tương tự cho ảnh bên trong: w-16 h-16 trên mobile, md:w-20 md:h-20 trên md:
                                    className="object-cover w-16 h-16 md:w-20 md:h-20"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Ảnh đè lên */}
                    <img
                        src={p17}
                        alt="Overlay"
                        className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 w-[500px] h-[750px] z-10"
                    />
                </div>


                {/* Right side: Text Content */}
                <div className="w-full md:w-1/2 flex flex-col items-start text-left px-0">
                    <h2 className="text-4xl mb-6 leading-snug font-bold">
                        <span className="block">The possibilities are quite</span>
                        <span className="block">
                            possibly <span className="italic font-normal">endless.</span>
                        </span>
                    </h2>

                    <ul className="text-xl md:text-lg text-gray-200 list-disc list-inside space-y-2 mb-6">
                        <li>500+ modular garment blocks, trims and accessories</li>
                        <li>300+ curated materials, prints and graphics</li>
                        <li>26 million+ possible combinations (for now)</li>
                        <li>120+ assets creator & contributors</li>
                        <li>New assets drop every single month.</li>
                    </ul>

                    <p className="text-xl md:text-lg text-gray-400 mb-8">
                        Your creativity will never ever hit the wall with Drippy.
                    </p>

                    <button className="bg-[#1e1e20] text-gray-300 border border-gray-800 px-8 py-4 cursor-pointer rounded-full shadow-lg hover:bg-[#3d3c3f] transition duration-300">
                        View assets library ↗
                    </button>
                </div>



            </div>
        </div>


    )
}

