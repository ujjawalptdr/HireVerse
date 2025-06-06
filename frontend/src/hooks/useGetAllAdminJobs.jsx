import { setAllAdminJobs, setAllJobs } from '@/redux/jobSlice';
// import { JOB_API_END_POINT } from '@/utils/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`https://hireverse.onrender.com/api/v1/job/getadminjobs`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setAllAdminJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllAdminJobs();
    }, []);
}
