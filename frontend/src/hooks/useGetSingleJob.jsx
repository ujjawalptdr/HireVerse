import { setAllJobs } from '@/redux/jobSlice';
// import { JOB_API_END_POINT } from '@/utils/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useGetSingleJob = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`https://hireverse.onrender.com/api/v1/job/get`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    }, []);
}
