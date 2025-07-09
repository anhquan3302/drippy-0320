import React from 'react'
import p6 from '../assets/p6.png'

export default function Content3() {
    return (
        <div className='flex flex-col items-center min-h-screen text-white mt-20 bg-[#1c1c1e] rounded-3xl mx-auto max-w-6xl px-4'>

  <h1 className='text-5xl md:text-5xl font-semibold mb-4 text-center mt-20'>
    Generate <span className='italic'>precise patterns</span> in one-click.
  </h1>

  <p className='text-xl md:text-xl text-gray-400 max-w-3xl mx-auto text-center'>
    Each 3D block comes with verified DXF pattern files – ready to send<br className="hidden md:block" />
    to your seamstress or manufacturer
  </p>

  <button className='bg-[#1e1e20] text-gray-400 mt-10 border border-gray-800 px-8 py-4 rounded-full text-lg hover:bg-[#3d3c3f] transition duration-300'>
    View a sample ↗
  </button>

  {/* Container ảnh */}
  <div className="relative w-full max-w-6xl flex justify-center mt-16 mb-10 px-4">
    <img
      src={p6}
      alt="icon"
      className="w-full max-w-[700px] object-contain"
    />
  </div>

</div>


    )
}

