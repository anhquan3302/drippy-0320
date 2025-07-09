import React from 'react'


export default function Content6() {
    return (
        <div className="flex flex-col items-center min-h-screen text-white pt-24 px-4 bg-black">
            {/* Tiêu đề */}
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-center">
                Here's what they say about <span className="italic">us.</span>
            </h1>

            {/* Phụ đề */}
            <p className="text-lg md:text-xl px-4 text-gray-400 max-w-3xl mx-auto text-center">
                Fashion entrepreneurs around the world love Drippy for
                <br className="hidden md:block" />
                its flexibility and ease of use.
            </p>

            {/* Các khối review */}
            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-6 mt-10 px-4">
                {/* Review 1 */}
                <div className="w-full md:w-1/3 bg-[#1c1c1e] p-6 rounded-2xl text-left">
                    <p className="text-gray-400 text-base leading-relaxed">
                        "I am currently teaching a class of 85 fashion students in Rome, from over 20 countries.
                        I noticed the class in general is terrified to work with 3D. It is almost like a mental block for many.
                        When I found Drippy, it was like a lightbulb turning on."
                    </p>
                </div>

                {/* Review 2 */}
                <div className="w-full md:w-1/3 bg-[#1c1c1e] p-6 rounded-2xl text-left">
                    <p className="text-gray-400 text-base leading-relaxed">
                        "I used to struggle with 3D design software that felt like it took a lifetime to learn.
                        Drippy made it so easy to bring my ideas to life—I can finally design without feeling overwhelmed.
                        It’s exactly what I needed."
                    </p>
                </div>

                {/* Review 3 */}
                <div className="w-full md:w-1/3 bg-[#1c1c1e] p-6 rounded-2xl text-left">
                    <p className="text-gray-400 text-base leading-relaxed">
                        "I’m still learning, but Drippy’s 3D tools have made a huge difference in my design projects.
                        I can visualize everything instantly and make changes on the spot, which has really helped me grow as a designer."
                    </p>
                </div>
            </div>

        </div>


    )
}
