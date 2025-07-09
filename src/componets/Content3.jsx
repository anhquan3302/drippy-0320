import React from 'react'
import p6 from '../assets/p6.png'

export default function Content3() {
    return (
        <div className='flex flex-col items-center min-h-screen text-white mt-20 bg-[#1c1c1e] rounded-3xl mx-auto max-w-6xl'>

            <h1 className='text-6xl md:text-5xl font-semibold mb-4 text-center mt-20'>
                Generate <span className='italic'>precise patterns</span> in one-click.
            </h1>

            <p className='text-2xl md:text-xl px-12 text-gray-400 max-w-3xl mx-auto text-center'>
                Each 3D block comes with verified DXF pattern files – ready to send<br />
                to your seamstress or manufacturer
            </p>

            <button className='bg-[#1e1e20] cursor-pointer text-gray-400 mt-10 border border-gray-800 px-8 py-4 rounded-full text-lg hover:bg-[#3d3c3f] transition duration-300'>
                View a sample ↗
            </button>

            {/* Container cắt ảnh */}
            <div className="relative w-full max-w-6xl h-[520px] overflow-hidden mt-10">
                <img
                    src={p6}
                    alt="icon"
                    className="w-auto max-w-[400px] md:max-w-[200px] lg:max-w-[1000px] mx-auto -mt-80 pb-20"
                />
            </div>



        </div>

    )
}

