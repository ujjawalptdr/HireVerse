import { setLoading } from '@/redux/authSlice';              //redux-toolkit part
// import { USER_API_END_POINT } from '@/utils/constants';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';      //redux-toolkit part
import { Link, useNavigate } from 'react-router-dom';        //useNavigate() is use to redirect the user to another path
import { toast } from 'sonner';                              //use for pop the message

const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phoneNumber: '',
        password: '',
        role: 'student', // default is student
        file: null,
    });
    const navigate = useNavigate();
    const { loading, user } = useSelector((store) => store.auth); //to access the loading state
    const dispatcher = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({
            ...prev,
            file: file,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        //As we are going to send this data as a Form Data only because of photo file, so lets first convert it.
        const finalFormData = new FormData();
        finalFormData.append("fullname", formData.fullname);
        finalFormData.append("email", formData.email);
        finalFormData.append("phoneNumber", formData.phoneNumber);
        finalFormData.append("password", formData.password);
        finalFormData.append("role", formData.role);
        if (formData.file) {
            finalFormData.append("file", formData.file);
        }

        try {
            dispatcher(setLoading(true));
            const res = await axios.post(`${import.meta.env.VITE_USER_API_END_POINT}/register`, finalFormData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatcher(setLoading(false));
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
            <div className="w-full max-w-md md:max-w-lg bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                <form onSubmit={submitHandler}>
                    {/* Full Name */}
                    <div className="mb-4">
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"

                            name="fullname"
                            value={formData.fullname}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"

                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"

                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"

                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* User Type (Student / Recruiter) */}
                    <div className="mb-4">
                        <span className="text-sm font-medium text-gray-700">User Type</span>
                        <div className="flex items-center space-x-4 mt-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={formData.role === 'student'}
                                    onChange={handleInputChange}
                                    className="form-radio text-indigo-600"
                                />
                                <span className="ml-2 text-sm">Student</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    checked={formData.role === 'recruiter'}
                                    onChange={handleInputChange}
                                    className="form-radio text-indigo-600"
                                />
                                <span className="ml-2 text-sm">Recruiter</span>
                            </label>
                        </div>
                    </div>

                    {/* Profile Photo Upload */}
                    <div className="mb-4">
                        <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                            Upload Profile Photo
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            name="file"
                            onChange={handleFileChange}
                            className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md file:border-0 file:bg-gray-50 file:text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    {loading ? (
                        <button className="flex justify-center items-center gap-2 w-full mb-4 py-2 px-4 bg-slate-900 text-white font-semibold rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <Loader2 className="animate-spin " />
                            <span>Please wait</span>
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="w-full mb-4 py-2 px-4 bg-slate-900 text-white font-semibold rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Signup
                        </button>
                    )}
                    <span className='text-sm'>Already have an account? <Link to="/login" className='text-indigo-600'>Login</Link></span>
                </form>
            </div>
        </div>
    );
};

export default Signup;
