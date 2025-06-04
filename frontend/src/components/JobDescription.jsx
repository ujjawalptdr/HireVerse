import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Briefcase, Users, NotebookText, Wallet, Zap } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleJob } from '@/redux/jobSlice';
// import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constants';
import axios from 'axios';
import { toast } from 'sonner';


const JobDescription = () => {

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();
    const { singleJob } = useSelector(store => store.job);
    const { user } = useSelector(store => store.auth);

    // finding that the user has already applied or not
    const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isIntiallyApplied);


    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });

            if (res.data.success) {
                setIsApplied(true); // Update the local state
                const updatedSingleJob = { ...singleJob, applications: [...singleJob.applications, { applicant: user?._id }] } // for real time update of the jon data
                dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
                toast.success(res.data.message);

            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id)) // Ensure the state is in sync with fetched data
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch, user?._id]);

    return (
        <div className='max-w-7xl mx-auto my-10 p-6 bg-white'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
                {/* Job Title and Details */}
                <div>
                    <h1 className='font-bold text-2xl text-gray-900'>{singleJob?.title}</h1>
                    <div className='flex flex-wrap gap-2 mt-3'>
                        <Badge className={'text-blue-700 font-bold'} variant="ghost">{singleJob?.position} Position</Badge>
                        <Badge className={'text-[#F83001] font-bold'} variant="ghost">{singleJob?.jobType}</Badge>
                        <Badge className={'text-[#7209B7] font-bold'} variant="ghost">{singleJob?.salary}LPA</Badge>
                    </div>
                </div>

                {/* Apply Button */}
                <Button
                    onClick={isApplied ? null : applyJobHandler}
                    disabled={isApplied}
                    className={`px-6 py-2 rounded-lg transition-all duration-300 ml-auto md:mx-0
                        ${isApplied ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#7209B7] hover:bg-[#5e078f] text-white'}`}
                >
                    {isApplied ? "Already Applied" : "Apply Now"}
                </Button>
            </div>

            {/* Job Description */}
            <h1 className='border-b-2 border-gray-300 font-semibold text-lg py-4 text-gray-800'>Job Description</h1>

            <div className='my-5 text-gray-700 space-y-3'>
                <p className='flex items-center gap-3'><Briefcase size={18} className="text-gray-600" /> <strong>Role:</strong> <span className='text-gray-800'>{singleJob?.title}</span></p>
                <p className='flex items-center gap-3'><MapPin size={18} className="text-gray-600" /> <strong>Location:</strong> <span className='text-gray-800'>{singleJob?.location}</span></p>
                <p className='flex items-start gap-3'><NotebookText size={18} className="text-gray-600" /><strong>Description:</strong> <span className='text-gray-800'>{singleJob?.description}</span></p>
                <p className='flex items-center gap-3'><Zap size={18} className="text-gray-600" /><strong>Experience:</strong> <span className='text-gray-800'>{singleJob?.experience} years</span></p>
                <p className='flex items-center gap-3'><Wallet size={18} className="text-gray-600" /><strong>Salary:</strong> <span className='text-gray-800'>{singleJob?.salary}LPA</span></p>
                <p className='flex items-center gap-3'><Users size={18} className="text-gray-600" /> <strong>Total Applicants:</strong> <span className='text-gray-800'>{singleJob?.applications?.length}</span></p>
                <p className='flex items-center gap-3'><Calendar size={18} className="text-gray-600" /> <strong>Posted Date:</strong> <span className='text-gray-800'>{singleJob?.createdAt.split("T")[0]}</span></p>
            </div>
        </div>
    );
}

export default JobDescription;
