import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import { useGetAllCompanies } from '@/hooks/useGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'

const Companies = () => {
    useGetAllCompanies();
    const navigate = useNavigate();

    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchCompanyByText(input));
    }, [input])

    return (
        <div>
            <Navbar />
            <div className="max-w-6xl mx-auto my-10 px-3 sm:px-5">
                <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-5 my-5">
                    <Input
                        className="w-full "
                        placeholder="Filter by name"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div className='flex justify-end w-full'>
                        <Button
                            className="w-auto sm:w-fit"
                            onClick={() => navigate("/admin/companies/create")}
                        >
                            Register New Company
                        </Button>
                    </div>

                </div>
                <CompaniesTable />
            </div>
        </div>

    )
}

export default Companies