import React from 'react'
import plusicon from '../assets/plus.png'
import icon2 from '../assets/1.2.png'
import icon3 from '../assets/1.3.png'
import icon4 from '../assets/2.1.png'
import icon5 from '../assets/2.2.png'
import icon6 from '../assets/2.3.png'
import icon7 from '../assets/3.1.png'
import icon8 from '../assets/3.2.png'
import icon9 from '../assets/3.3.png'

export default function Content2() {
    return (
        <div className='flex flex-col items-center min-h-screen text-white pt-24 '>
            <h1 className='text-5xl md:text-5xl font-semibold mb-4 text-center'>Your creative engine right <span className='italic'>on te browser</span> </h1>
            <p className='text-xl md:text-xl px-12 text-gray-400 max-w-3xl mx-auto text-center'>Enjoy the full power of 3D technology - minus the complexity  </p>
            <div class='flex flex-col gap-10 mt-10'>
                {/* Container chính cho toàn bộ hàng các khối */}
                {/* Sử dụng Grid để chia cột đều */}
                <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto'>
                    {/* grid-cols-1: Mặc định (màn hình nhỏ) 1 cột
                        md:grid-cols-2: Trên màn hình trung bình trở lên, 2 cột
                        lg:grid-cols-3: Trên màn hình lớn trở lên, 3 cột
                        gap-8: Khoảng cách giữa các cột và hàng (32px)
                        px-4: Padding ngang cho toàn bộ lưới để không dính sát cạnh màn hình
                        max-w-7xl mx-auto: Giới hạn chiều rộng tối đa và căn giữa toàn bộ lưới trên màn hình lớn */}
                    {/* Khối 1: Import assets */}
                    <div className='flex flex-col items-center py-8 bg-[#1c1c1e] rounded-2xl text-white hover:bg-[#222227] transition-colors duration-300 cursor-pointer'>
                        <div className='p-6 text-center'>
                            <div className='bg-[#2c2c2e] flex items-center justify-center rounded-2xl w-20 h-20 mb-4 mx-auto'>
                                <img src={plusicon} alt='icon' className='h-10 w-10'></img>
                            </div>
                            <p className='text-xl font-bold pb-2'>Import assets</p>
                            <p className='text-gray-400 text-base leading-relaxed'>
                                Bring in your own #D gamenet from <br />
                                CLOD3D, Browzwear,Marvelous, or any <br /> tool that exports GLTF,GLB or FBX.
                            </p>
                        </div>
                    </div>

                    {/* Khối 2: Material library (ví dụ) */}
                    <div className='flex flex-col items-center py-8 bg-[#1c1c1e] rounded-2xl text-white hover:bg-[#222227] transition-colors duration-300 cursor-pointer'>
                        <div className='p-6 text-center'>
                            <div className='bg-[#2c2c2e] flex items-center justify-center rounded-2xl w-20 h-20 mb-4 mx-auto'>
                                <img src={icon2} alt='icon' className='h-10 w-10'></img> {/* Thay bằng icon phù hợp */}
                            </div>
                            <p className='text-xl font-bold pb-2'>Material library</p>
                            <p className='text-gray-400 text-base leading-relaxed'>
                                Access hundreds of curated materials, <br />
                                prints and graphics/artworks — or <br /> upload your own files.
                            </p>
                        </div>
                    </div>

                    {/* Khối 3: Drag & Drop Graphics (ví dụ) */}
                    <div className='flex flex-col items-center py-8 bg-[#1c1c1e] rounded-2xl text-white hover:bg-[#222227] transition-colors duration-300 cursor-pointer'>
                        <div className='p-6 text-center'>
                            <div className='bg-[#2c2c2e] flex items-center justify-center rounded-2xl w-20 h-20 mb-4 mx-auto'>
                                <img src={icon3} alt='icon' className='h-10 w-10'></img> {/* Thay bằng icon phù hợp */}
                            </div>
                            <p className='text-xl font-bold pb-2'>Drag & Drop Graphics</p>
                            <p className='text-gray-400 text-base leading-relaxed'>
                                Add logos, patches, or custom artwork <br />
                                by simply dragging them onto your <br /> garment. No mapping required.
                            </p>
                        </div>
                    </div>
                </div>
                <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto'>
                    {/* Khối 1: Material editor */}
                    <div className='flex flex-col items-center py-8 bg-[#1c1c1e] rounded-2xl text-white hover:bg-[#222227] transition-colors duration-300 cursor-pointer'>
                        <div className='p-6 text-center'>
                            <div className='bg-[#2c2c2e] flex items-center justify-center rounded-2xl w-20 h-20 mb-4 mx-auto'>
                                <img src={icon4} alt='icon' className='h-10 w-10'></img> {/* Thay bằng icon Material editor */}
                            </div>
                            <p className='text-xl font-bold pb-2'>Material editor</p>
                            <p className='text-gray-400 text-base leading-relaxed'>
                                Tweak fabric color, shine, repeat, and <br />
                                opacity — directly on your 3D garment <br /> to make it truly yours.
                            </p>
                        </div>
                    </div>

                    {/* Khối 2: 3D scene & background */}
                    <div className='flex flex-col items-center py-8 bg-[#1c1c1e] rounded-2xl text-white hover:bg-[#222227] transition-colors duration-300 cursor-pointer'>
                        <div className='p-6 text-center'>
                            <div className='bg-[#2c2c2e] flex items-center justify-center rounded-2xl w-20 h-20 mb-4 mx-auto'>
                                <img src={icon5} alt='icon' className='h-10 w-10'></img> {/* Thay bằng icon 3D scene */}
                            </div>
                            <p className='text-xl font-bold pb-2'>3D scene & background</p>
                            <p className='text-gray-400 text-base leading-relaxed'>
                                Change backgrounds, lighting, and <br />
                                floor settings to set the perfect scene <br /> for your design or content export.
                            </p>
                        </div>
                    </div>

                    {/* Khối 3: Realistic Avatars */}
                    <div className='flex flex-col items-center py-8 bg-[#1c1c1e] rounded-2xl text-white hover:bg-[#222227] transition-colors duration-300 cursor-pointer'>
                        <div className='p-6 text-center'>
                            <div className='bg-[#2c2c2e] flex items-center justify-center rounded-2xl w-20 h-20 mb-4 mx-auto'>
                                <img src={icon6} alt='icon' className='h-10 w-10'></img> {/* Thay bằng icon Realistic Avatars */}
                            </div>
                            <p className='text-xl font-bold pb-2'>Realistic Avatars</p>
                            <p className='text-gray-400 text-base leading-relaxed'>
                                Preview your designs on lifelike <br />
                                avatars — built to showcase drape <br /> and silhouette accurately.
                            </p>
                        </div>
                    </div>
                </div>
                <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto'>
                    {/* Khối 1: Templates library */}
                    <div className='flex flex-col items-center py-8 bg-[#1c1c1e] rounded-2xl text-white hover:bg-[#222227] transition-colors duration-300 cursor-pointer'>
                        <div className='p-6 text-center'>
                            <div className='bg-[#2c2c2e] flex items-center justify-center rounded-2xl w-20 h-20 mb-4 mx-auto'>
                                <img src={icon7} alt='icon' className='h-10 w-10'></img> {/* Thay bằng icon Templates library */}
                            </div>
                            <p className='text-xl font-bold pb-2'>Templates library</p>
                            <p className='text-gray-400 text-base leading-relaxed'>
                                Start with pre-designed looks and <br />
                                customize from there. All templates are <br /> made from verified modular blocks.
                            </p>
                        </div>
                    </div>

                    {/* Khối 2: Image and video export */}
                    <div className='flex flex-col items-center py-8 bg-[#1c1c1e] rounded-2xl text-white hover:bg-[#222227] transition-colors duration-300 cursor-pointer'>
                        <div className='p-6 text-center'>
                            <div className='bg-[#2c2c2e] flex items-center justify-center rounded-2xl w-20 h-20 mb-4 mx-auto'>
                                <img src={icon8} alt='icon' className='h-10 w-10'></img> {/* Thay bằng icon Image and video export */}
                            </div>
                            <p className='text-xl font-bold pb-2'>Image and video export</p>
                            <p className='text-gray-400 text-base leading-relaxed'>
                                Download crisp PNGs or short turntable <br />
                                videos of your look — perfect for <br /> portfolios, pitches, or social media.
                            </p>
                        </div>
                    </div>

                    {/* Khối 3: Instant design generator */}
                    <div className='flex flex-col items-center py-8 bg-[#1c1c1e] rounded-2xl text-white hover:bg-[#222227] transition-colors duration-300 cursor-pointer'>
                        <div className='p-6 text-center'>
                            <div className='bg-[#2c2c2e] flex items-center justify-center rounded-2xl w-20 h-20 mb-4 mx-auto'>
                                <img src={icon9} alt='icon' className='h-10 w-10'></img> {/* Thay bằng icon Instant design generator */}
                            </div>
                            <p className='text-xl font-bold pb-2'>Instant design generator</p>
                            <p className='text-gray-400 text-base leading-relaxed'>
                                Shuffle blocks, materials, and colors in <br />
                                one click to spark ideas and explore <br /> new directions instantly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

