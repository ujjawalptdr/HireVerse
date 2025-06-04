import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import { useGetAllAdminJobs } from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'

const AdminJobs = () => {
    useGetAllAdminJobs();
    const navigate = useNavigate();

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchJobByText(input));
    }, [input])

    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mx-auto my-10 px-3 sm:px-5'>
                <div className='flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-5 my-5'>
                    <Input
                        className="w-full"
                        placeholder="Filter by name, role"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div className='flex justify-end w-full'>

                        <Button onClick={() => navigate("/admin/jobs/create")}
                            className="w-auto sm:w-fit">Create New Jobs</Button>
                    </div>
                </div>
                <AdminJobsTable />
            </div>
        </div>
    )
}

export default AdminJobs