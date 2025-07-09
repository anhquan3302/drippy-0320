import React from 'react'


export default function Content6() {
    return (
        <div className='flex flex-col items-center  min-h-screen  text-white pt-24'>
            <h1 className='text-5xl md:text-5xl font-semibold mb-4 text-center'>Here's what they say about <span className='italic'>us.</span></h1>
            <p className='text-xl md:text-xl  px-12 text-gray-400 max-w-3xl mx-auto text-center '>Fashion enterepreneurs around the worlds love Drippy for <br /> ít flexibility and ease of use</p>
            <div className='max-w-7xl mx-auto px-6 flex flex-row gap-8 mt-8'> {/* Dùng max-w và mx-auto để căn giữa và px cho padding bên trong */}
                {/* Ô 1 - Giờ có class flex-1 để tự động cân bằng chiều rộng */}
                <div className="text-left flex-1 bg-[#1c1c1e] p-6 rounded-2xl "> {/* Đã bỏ max-w-xl và thêm flex-1 */}
                    <p className='text-gray-400 text-base leading-relaxed'>
                        "I am currently teaching a class of 85 fashion students in Rome, from over 20 countries."" I noticed the class in general is terrified to work with 3D. It is almost like a mental block for many. When I found Drippy, it was like a lightbulb turning on.
                    </p>
                </div>
                {/* Ô 2 - Giờ có class flex-1 để tự động cân bằng chiều rộng */}
                <div className="text-left flex-1 bg-[#1c1c1e] p-6 rounded-2xl"> {/* Đã bỏ max-w-xl và thêm flex-1 */}
                    <p className='text-gray-400 text-base leading-relaxed'>
                        "I used to struggle with 3D design software that felt like it took a lifetime to learn. Drippy made it so easy to bring my ideas to life—I can finally design without feeling overwhelmed. It’s exactly what I needed."
                    </p>
                </div>
                {/* Ô 3 - Giờ có class flex-1 để tự động cân bằng chiều rộng */}
                <div className="text-left flex-1 bg-[#1c1c1e] p-6 rounded-2xl"> {/* Đã bỏ max-w-xl và thêm flex-1 */}
                    <p className='text-gray-400 text-base leading-relaxed'>
                        "I’m still learning, but Drippy’s 3D tools have made a huge difference in my design projects. I can visualize everything instantly and make changes on the spot, which has really helped me grow as a designer."
                    </p>
                </div>
            </div>

        </div>

    )
}
