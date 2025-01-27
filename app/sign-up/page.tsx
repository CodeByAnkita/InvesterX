'use client'
import { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import Logo from '../components/Logo';

const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic (e.g., API call or validation)
        console.log({ fullName, email, password, termsAccepted });
    };

    return (
        <div className="bg-[#f6f8ff] min-h-screen flex flex-col items-center justify-center py-6">
            <div className="max-w-lg mx-auto p-6 bg-white rounded-3xl shadow-lg">
                <div className=" justify-items-center  mb-6">
                    <Logo />
                </div>
                <div className="justify-items-center mb-6">
                    <FaRegUser className='h-8 w-8 my-4' />
                    <h2 className="text-3xl font-bold text-gray-900 my-4">Create your account</h2>
                    <p className="text-gray-500 text-center">
                        Lorem ipsum dolor sit amet consectetur cursus accumsan congue nunc duis tincidunt auctor egestas ut
                        purus morbi sed.
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-semibold">Full name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-semibold">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700 font-semibold">Password</label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={termsAccepted}
                            onChange={() => setTermsAccepted(!termsAccepted)}
                            className="mr-2"
                        />
                        <label htmlFor="terms" className="text-gray-700">
                            I have read agree to the{' '}
                            <a href="#" className="text-blue-500">
                                Terms & Conditions
                            </a>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Subscribe <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-700">
                        Have an account already? <a href="#" className="text-blue-500">Sign in</a>
                    </p>
                </div>
            </div>
            <footer className="text-center my-8 items-center bg-white overflow-hidden rounded-3xl mx-4 px-8 flex lg:flex-row flex-col justify-between text-gray-700">
                <div className="flex justify-center items-center my-4">
                    <Logo />
                </div>
                <p>
                    Copyright © Investor X | Designed by{" "}
                    <a href="#" className="text-blue-600">
                        BRIX Templates
                    </a>{" "}
                    - Powered by{" "}
                    <a href="#" className="text-blue-600">
                        Webflow
                    </a>
                </p>
            </footer>
        </div>
    );
};

export default SignUp;