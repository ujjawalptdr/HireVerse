import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImg from "../assets/heroImg.jpg"
import CategoryCarousel from './CategoryCarousel';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <section className="relative min-h-screen py-16 px-6 md:px-12 bg-gradient-to-br from-purple-50 via-white to-purple-50 overflow-hidden">

            <div className="relative  max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
                {/* Cartoon Image */}
                <motion.img
                    src={heroImg}
                    alt="Job Illustration"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full z-0 max-w-xs md:max-w-sm lg:max-w-md object-cover"
                />

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left flex flex-col gap-6">
                    <motion.span
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="inline-block z-10 font-semibold px-6 py-2 rounded-full bg-white text-[#F83002] shadow hover:shadow-lg transition"
                    >
                        🎯 Your Gateway to Great Careers
                    </motion.span>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-800"
                    >
                        Search, Apply &<br /> Land Your{" "}
                        <span className="text-[#6A38C2]">Dream Job</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-base z-10 md:text-lg text-gray-600 max-w-xl mx-auto md:mx-0"
                    >
                        Let your journey to the perfect career begin! Explore the best jobs and
                        make your dream a reality.
                    </motion.p>

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="mt-4 flex z-10 w-full max-w-md border border-gray-300 shadow-lg rounded-full pl-4 items-center gap-2 bg-white focus-within:shadow-xl mx-auto md:mx-0"
                    >
                        <input
                            type="text"
                            placeholder="Find your dream jobs..."
                            className="flex-1 py-2 bg-transparent outline-none text-gray-800 placeholder:text-gray-400"
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <Button
                            onClick={searchJobHandler}
                            className="rounded-r-full bg-[#6A38C2] text-white px-4 py-2 hover:bg-[#5329a6] transition"
                        >
                            <Search className="h-5 w-5" />
                        </Button>
                    </motion.div>
                </div>
            </div>
            <div className='mt-10 lg:mt-32'>
                <CategoryCarousel />
            </div>
        </section>
    );

}

export default HeroSection