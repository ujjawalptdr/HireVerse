import React, { useEffect } from 'react';
import Job from './Job';
import Navbar from './shared/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useGetAllJobs } from '@/hooks/useGetAllJobs';



const Browse = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        }
    }, []);
    return (
        <div>
            <Navbar />
            <div className="max-w-4xl lg:max-w-7xl mx-auto px-5  my-10">
                <h1 className="font-bold text-xl my-6 md:my-10">
                    Search Results ({allJobs.length})
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allJobs.map((job) => (
                        <Job key={job?._id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Browse;
