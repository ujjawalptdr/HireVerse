import { setSingleCompany } from '@/redux/companySlice';
// import { COMPANY_API_END_POINT } from '@/utils/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`https://hireverse.onrender.com/api/v1/company/get/${companyId}`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleCompany();
    }, [companyId, dispatch]);
}
