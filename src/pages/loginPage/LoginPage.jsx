import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLock } from 'react-icons/fa';
import { useHistory } from "react-router-dom";
const baImage = "../../../public/img/login_bg.png"
import ApiService from "@/utils/api";


function Login() {
    let navigate = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault()
        navigate.push('/dashboard/salesDepartment')
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            /** below Line will not work as JSON we are having locally */
            const response = await ApiService.get('mockData/asl.json');
          } catch (error) {
          }
        };
    
        fetchData();
      }, []);

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${baImage})`
            }}
        >
            <div className="bg-white w-full max-w-md p-8 rounded-lg">
                <h1 className="text-3xl font-semibold text-center mb-2">Login into account</h1>
                <div className="text-sm text-gray-500 font-normal text-center mb-8">Use your credentials to access your account.</div>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="flex items-center rounded-md bg-white border border-gray-300">
                        <span className="inline-flex items-center justify-center rounded-l-md px-2">
                            <HiOutlineMail className="w-6 h-6 text-gray-400" />
                        </span>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="flex-grow w-full px-4 py-2 text-gray-700 placeholder-gray-500 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex items-center rounded-md bg-white border border-gray-300">
                        <span className="inline-flex items-center justify-center rounded-l-md px-2">
                            <FaLock className="w-6 h-6 text-gray-400" />
                        </span>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="flex-grow w-full px-4 py-2 text-gray-700 placeholder-gray-500 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        className="w-full bg-[#1A91D1] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg h-12"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                    {/* Other login screen elements */}
                    <p className="text-center text-gray-500 text-sm mt-4">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-blue-500">
                            Register here
                        </Link>
                    </p>
                </div>
        </div>
    );
}

export default Login;
