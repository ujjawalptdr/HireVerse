import React from 'react'
import LatestJobCard from './LatestJobCard';
import { useSelector } from 'react-redux';


const LatestJobs = () => {
    const { allJobs } = useSelector(store => store.job);
    return (
        <div className='max-w-7xl mx-7 sm:mx-5 lg:mx-auto my-20'>
            <h1 className='text-4xl font-bold '><span className='text-[#6A38C2]'>Latest & Top</span> Job Openings</h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
                {
                    allJobs.length <= 0 ? <span>No Jobs Are Posted Yet</span> : allJobs.slice(0, 6).map((job) => <LatestJobCard key={job._id} job={job} />)
                }
            </div>
        </div>
    )
}

export default LatestJobs