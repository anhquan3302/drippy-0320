import React from 'react'
import p2 from '../assets/p2.png'

export default function HomePage() {
    return (
        <div className='flex flex-col items-center  min-h-screen  text-white pt-24'>
           
            <h1 className='text-6xl md:text-6xl font-bold mb-4 text-center'>
                Remix. Export. Launch. <span className="italic">Repeat!</span>
            </h1>
           
            <p className='text-2xl md:text-2xl  px-12 text-gray-400 max-w-3xl mx-auto text-center leading-normal'>
                Designing garments and sample-ready patterns has<br />never been this fun — or this fast.
            </p>
            
            <button className='mt-8 bg-blue-500 max-w-xl mx-auto cursor-pointer hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-xl text-lg transition-colors'>
                Try it yourself - It's FREE 
            </button>
            <img src={p2} alt='background'className='max-w-[90%] mx-auto  rounded-4xl p-10'></img>
        </div>
    )
}


