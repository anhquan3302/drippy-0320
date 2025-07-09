import React from 'react'
import p18 from '../assets/p18.png'
import p19 from '../assets/p19.png'
import p20 from '../assets/p20.png'
import p21 from '../assets/p21.png'
import p22 from '../assets/p22.png'
import p23 from '../assets/p23.png'
import p24 from '../assets/p24.png'
import p25 from '../assets/p25.png'
import p26 from '../assets/p26.png'

function Content5() {
    const dressList = [
        p18, p19, p20, p21, p22, p23, p24, p25, p26
    ];
    return (
        <div className="flex flex-col items-center text-white text-center max-w-6xl mx-auto px-4 py-20">
            <p className="text-4xl md:text-5xl font-bold">
                Create everything you can <span className="italic font-normal">imagine.</span>
            </p>
            <p className="text-gray-400 mt-5 text-lg">
                Never start from scratch ever again
            </p>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-4 px-4 mt-8">
                {['Dress', 'Jumpsuit', 'T-shirt', 'Blouse', 'Hoodie', 'Jacket', 'Skirt'].map((item, i) => (
                    <p
                        key={i}
                        className="px-4 py-2 bg-[#1c1c1e] border border-transparent hover:border-gray-600 hover:bg-[#1e1e20] text-white rounded-full transition duration-200 cursor-pointer"
                    >
                        {item}
                    </p>
                ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-rows-3 gap-4 w-full mt-10 min-h-[750px]">
                {/* Ảnh 1: lớn - trái */}
                <div className="col-span-2 row-span-2 bg-[#f0f0f0] border border-gray-700 rounded-2xl overflow-hidden">
                    <img src={dressList[0]} alt="dress-0" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 2 */}
                <div className="bg-[#f9f5f0] border border-gray-700 rounded-2xl overflow-hidden">
                    <img src={dressList[1]} alt="dress-1" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 3 */}
                <div className="hidden md:block bg-[#e0f2f1] border border-gray-700 rounded-2xl overflow-hidden">
                    <img src={dressList[2]} alt="dress-2" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 4 */}
                <div className="hidden lg:block bg-[#c6d7e8] border border-gray-700 rounded-2xl overflow-hidden">
                    <img src={dressList[3]} alt="dress-3" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 5 */}
                <div className="bg-[#d7b678] border border-gray-700 rounded-2xl overflow-hidden">
                    <img src={dressList[4]} alt="dress-4" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 9: lớn - phải */}
                <div className="col-span-2 row-span-2 hidden md:flex bg-white border border-gray-700 rounded-2xl overflow-hidden">
                    <img src={dressList[8]} alt="dress-8" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 6 */}
                <div className="bg-[#e17eb5] border border-gray-700 rounded-2xl overflow-hidden">
                    <img src={dressList[5]} alt="dress-5" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 7 */}
                <div className="bg-[#de7777] border border-gray-700 rounded-2xl overflow-hidden">
                    <img src={dressList[6]} alt="dress-6" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 8 */}
                <div className="hidden md:block bg-white border border-gray-700 rounded-2xl overflow-hidden">
                    <img src={dressList[7]} alt="dress-7" className="object-cover w-full h-full" />
                </div>
            </div>

            {/* Button */}
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-400 py-2 mt-10 px-8 text-sm border border-gray-600 rounded-full shadow-md transition-colors cursor-pointer">
                Browse designs ↗
            </button>
        </div>

    )
}

export default Content5