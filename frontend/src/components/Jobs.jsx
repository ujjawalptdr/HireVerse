import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';

const Jobs = () => {
    const { allJobs, searchedQuery } = useSelector(store => store.job);
    const [filterJobs, setFilterJobs] = useState(allJobs);

    const [showFilter, setShowFilter] = useState(false)
    useEffect(() => {
        if (searchedQuery) {
            const filteredJobs = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                    job.location.toLowerCase().includes(searchedQuery.toLowerCase())
            })
            setFilterJobs(filteredJobs)
        } else {
            setFilterJobs(allJobs)
        }
    }, [allJobs, searchedQuery]);

    return (
        <div>
            <Navbar />
            <div className="max-w-7xl mx-auto mt-5 px-1">
                {/* Toggle Filter Button (only visible on small screens) */}
                <div className="flex md:hidden justify-end mb-4">
                    <button
                        onClick={() => setShowFilter(!showFilter)}
                        className="flex items-center gap-2 text-sm bg-[#6A38C2] text-white px-3 py-2 rounded-full shadow hover:bg-[#5329a6] transition"
                    >
                        <Filter size={16} />
                        {showFilter ? "Hide Filters" : "Show Filters"}
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-5">
                    <div className={` w-20%`}>
                        <div className={`${showFilter ? "block" : "hidden"} md:block w-20%`}>
                            <FilterCard />
                        </div>
                    </div>
                    {filterJobs.length <= 0 ? (
                        <span>Job not found</span>
                    ) : (
                        <div className="flex-1 h-[88vh] pb-5">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
                                {filterJobs.map((job) => (
                                    <motion.div
                                        initial={{ opacity: 100, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ duration: 0.3 }}
                                        key={job?._id}
                                    >
                                        <Job job={job} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Jobs