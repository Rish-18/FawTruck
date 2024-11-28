import React from 'react'

function About() {
    return (
        <div>
            <section
                className="py-40 bg-gray-100 relative bg-fixed bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://www.thedrive.com/wp-content/uploads/2023/07/24/nikola-fire-1.jpg')`,
                }}
            >
                {/* Green Div - Reduced size on small screens */}
                <div className="absolute top-0 right-0 w-[100px] h-[100px] bg-green-900 md:w-[150px] md:h-[150px] md:top-0 md:right-0 z-30"></div>

                <div className="inset-0 bg-black opacity-50 z-0"></div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Main Grid Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
                        {/* Left Section with Image */}
                        <div className="mx-auto">
                            <img
                                src="https://www.foton-africa.com/wp-content/uploads/2024/03/Foton-Trucks-high-energy-sales.jpg"
                                alt="Foton Trucks - High Energy Sales"
                                width={600}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>

                        {/* Right Section */}
                        <div className="mx-w-[500px]">
                            <h2 className="text-left text-3xl font-bold mb-2 text-white">
                                About Us
                            </h2>
                            <p className="text-left text-gray-200 mb-2">
                                Growth, Innovation, Delivering <br />
                                Excellence
                            </p>

                            {/* White Div - Hidden on small screens */}
                            <div className="w-[50px] h-[50px] bg-white absolute right-[10%] top-[25%] z-10 hidden md:block"></div>

                            <hr className="w-[150px] h-[2px] bg-gray-300" />

                            <p className="text-gray-200 w-[80%]">
                                We, dummy company situated at area,city,state, are one of the
                                best multicommercial vehicles in the city.we have skilled and
                                trained sales manager who are well qualified and have undergone
                                extensive training. Our efforts are to offer haulistic
                                automobiles solution and not just the produts. We understand you
                                buisness needs and offer you a perfect commercial for your
                                buisness.
                            </p>
                            <button className="px-4 py-2 mt-4 bg-white text-blue-500 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300">
                                Read More
                            </button>
                        </div>
                    </div>

                    {/* Blue Div - Bottom left on larger screens */}
                    <div className="absolute bottom-[-20%] left-0 w-[50px] h-[50px] bg-blue-900 z-10"></div>
                </div>
            </section>
        </div>
    )
}

export default About
