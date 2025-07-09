import React from 'react'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'

export default function Content1() {
    return (
        <div className='flex flex-col items-center  min-h-screen  text-white pt-24'>
            <h1 className='text-4xl md:text-4xl font-semibold mb-4 text-center'>Built to help you launch <span className='italic'>faster</span> and <span className='italic'>easier.</span></h1>
            <p className='text-2xl md:text-2xl  px-12 text-gray-400 max-w-3xl mx-auto text-center '>Go form 3D design to sewing patterns in seconds, not days</p>
            <div className='flex flex-col md:flex-row items-center justify-center gap-10 mt-10'>
                <div className='flex flex-col items-center py-16 bg-black text-white'>
                    {/* Thêm padding top/bottom cho khoảng cách tổng thể nếu cần */}

                    {/* Container cho ảnh và text, giới hạn chiều rộng và căn giữa */}
                    <div className='max-w-7xl mx-auto px-6'> {/* Dùng max-w và mx-auto để căn giữa và px cho padding bên trong */}

                        {/* Ảnh */}
                        {/* Bỏ p-10 và bg-[#1c1c1e] ở đây vì ảnh không có nền và padding trong ảnh gốc */}
                        <img src={p3} alt="Content Image" className='w-full rounded-2xl mb-8' />

                        {/* Khối chứa tiêu đề và đoạn văn bản */}
                        <div className="text-left max-w-xl"> {/* max-w-xl để giới hạn chiều rộng của text và căn chỉnh theo bên trái của khối text */}
                            <p className='text-2xl font-bold pb-2'>3D blocks & assets</p>
                            {/* Tăng cỡ chữ lên 3xl và giảm pb xuống 2 để khoảng cách gần hơn */}
                            <p className='text-gray-400 text-lg leading-relaxed'>
                                Skip the blank canvas — Start by mixing & matching garments blocks and materials
                            </p>
                            {/* Đổi text-gray-500 sang text-gray-400 và tăng cỡ chữ lên lg, thêm leading-relaxed cho dễ đọc */}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center py-16 bg-black text-white'>
                    {/* Thêm padding top/bottom cho khoảng cách tổng thể nếu cần */}
                    {/* Container cho ảnh và text, giới hạn chiều rộng và căn giữa */}
                    <div className='max-w-7xl mx-auto px-6'> {/* Dùng max-w và mx-auto để căn giữa và px cho padding bên trong */}
                        {/* Ảnh */}
                        <img src={p4} alt="Content Image" className='w-full rounded-2xl mb-8' />
                        <div className="text-left max-w-xl"> {/* max-w-xl để giới hạn chiều rộng của text và căn chỉnh theo bên trái của khối text */}
                            <p className='text-2xl font-bold pb-2'>3D blocks & assets</p>
                            <p className='text-gray-400 text-lg leading-relaxed'>
                                Skip the blank canvas — Start by mixing & matching garments blocks and materials
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center py-16 bg-black text-white'>
                    <div className='max-w-7xl mx-auto px-6'> {/* Dùng max-w và mx-auto để căn giữa và px cho padding bên trong */}
                        <img src={p5} alt="Content Image" className='w-full rounded-2xl mb-8' />
                        <div className="text-left max-w-xl">
                            <p className='text-2xl font-bold pb-2'>3D blocks & assets</p>
                            <p className='text-gray-400 text-lg leading-relaxed'>
                                Skip the blank canvas — Start by mixing & matching garments blocks and materials
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="bg-gray-900 hover:bg-gray-700 text-gray-400 py-2 px-10 text-lg border border-gray-600 rounded-full shadow-md transition-colors cursor-pointer">
                Try it out ↗
            </button>
        </div>
    )
}


