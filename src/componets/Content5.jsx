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
        <div className='flex flex-col items-center min-h-screen text-white text-center max-w-6xl cursor-pointer h  mx-auto mt-50'>
            <p className='text-5xl md:text-4xl font-bold'>Create everything you can <span className='italic font-normal'>imagine.</span></p>
            <p className='text-gray-400 mt-5 text-lg'>Never start  from scratch ever again</p>
            <div className="flex flex-row flex-wrap gap-4 px-8 mt-10 max-w-6xl">
                {['Dress', 'Jumpsuit', 'T-shirt', 'Blouse', 'Hoodie', 'Jacket', 'Skirt'].map((item, i) => (
                    <p
                        key={i}
                        className="px-4 py-2 bg-[#1c1c1e] border border-transparent hover:border-gray-600 hover:bg-[#1e1e20] text-white rounded-full transition duration-200 cursor-pointer"
                    >
                        {item}
                    </p>
                ))}
            </div>
            <div className="grid grid-cols-5 grid-rows-3 gap-4 md:pl-0 pl-4 h-[750px] w-[96%] mt-10"> {/* Đã thêm w-screen và tăng chiều cao */}
                {/* Ảnh 1 (dressList[0]): Váy nơ hồng - Lớn, chiếm 2 cột và 2 hàng */}
                <div className="col-start-1 col-end-3 row-start-1 row-end-3 bg-[#f0f0f0] border border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src={dressList[0]} alt="dress-0" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 2 (dressList[1]): Váy trắng - Nhỏ, hàng 1, cột 3 */}
                <div className="col-start-3 col-end-4 row-start-1 row-end-2 bg-[#f9f5f0] border border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src={dressList[1]} alt="dress-1" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 3 (dressList[2]): Váy xanh lá - Nhỏ, hàng 1, cột 4 */}
                <div className="col-start-4 col-end-5 row-start-1 row-end-2 bg-[#e0f2f1] border border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src={dressList[2]} alt="dress-2" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 4 (dressList[3]): (Mới) - Nhỏ, hàng 1, cột 5 */}
                <div className="col-start-5 col-end-6 row-start-1 row-end-2 bg-[#c6d7e8] border border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src={dressList[3]} alt="dress-3" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 5 (dressList[4]): Váy đen - Nhỏ, hàng 2, cột 3 (bên phải Ảnh 1) */}
                <div className="col-start-3 col-end-4 row-start-2 row-end-3 bg-[#d7b678] border border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src={dressList[4]} alt="dress-4" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 9 (dressList[8]): Váy đen/hồng trái tim - Lớn, chiếm 2 cột và 2 hàng ở bên phải (bắt đầu từ cột 4, hàng 2) */}
                <div className="col-start-4 col-end-6 row-start-2 row-end-4 bg-white border border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src={dressList[8]} alt="dress-8" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 6 (dressList[5]): Váy đỏ - Nhỏ, hàng 3, cột 1 (bên dưới Ảnh 1) */}
                <div className="col-start-1 col-end-2 row-start-3 row-end-4 bg-[#e17eb5] border border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src={dressList[5]} alt="dress-5" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 7 (dressList[6]): Váy hồng xếp ly - Nhỏ, hàng 3, cột 2 (bên dưới Ảnh 1) */}
                <div className="col-start-2 col-end-3 row-start-3 row-end-4 bg-[#de7777] border border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src={dressList[6]} alt="dress-6" className="object-cover w-full h-full" />
                </div>

                {/* Ảnh 8 (dressList[7]): (Mới) - Nhỏ, hàng 3, cột 3 (bên dưới Ảnh 5) */}
                <div className="col-start-3 col-end-4 row-start-3 row-end-4 bg-white border border-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src={dressList[7]} alt="dress-7" className="object-cover w-full h-full" />
                </div>
            </div>
           <button className="bg-gray-800 hover:bg-gray-700 text-gray-400 py-2 mt-8 px-8 text-sm border border-gray-600 rounded-full shadow-md transition-colors cursor-pointer">
                Browser designs ↗
            </button>
        </div>
    )
}

export default Content5