import { setLoading, setUser } from "@/redux/authSlice";
// import { USER_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: "student", // default is student
    });
    const { loading, user } = useSelector((store) => store.auth); //to access the loading state
    const navigate = useNavigate();
    const dispatch = useDispatch();    // to dispatch the setLoading action.

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`https://hireverse.onrender.com/api/v1/user/login`, formData, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));    // as the finally will run no matters what
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 py-10">

            <div className="w-full max-w-md md:max-w-lg bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={submitHandler}>
                    {/* Email */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
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

                    {/* Password */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
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
                    <div className="mb-8">
                        <span className="text-sm font-medium text-gray-700">User Type</span>
                        <div className="flex items-center space-x-4 mt-2">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={formData.role === "student"}
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
                                    checked={formData.role === "recruiter"}
                                    onChange={handleInputChange}
                                    className="form-radio text-indigo-600"
                                />
                                <span className="ml-2 text-sm">Recruiter</span>
                            </label>
                        </div>
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
                            Login
                        </button>
                    )}

                    <span className="text-sm">
                        Don't have an account?
                        <Link to="/signup" className="text-indigo-600">
                            Signup
                        </Link>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Login;
