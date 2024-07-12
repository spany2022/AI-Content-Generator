"use client";
import Header from '@/app/dashboard/_components/Header';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface LoginInfo {
  email: string;
  password: string;
}

const Loginpage: React.FC = () => {
  // State for login form inputs
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: '',
    password: ''
  });

  

  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('loggedInUser');
    setToken(storedToken);
    setUsername(storedUsername);
  }, []);

  // Function to handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name as keyof LoginInfo] = value;
    setLoginInfo(copyLoginInfo);
  };

  // Function to handle form submission
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    // Basic validation: checking if email and password are provided
    if (!email || !password) {
      return alert("Email and password are required");
    }
    try {
      const url = "http://localhost:3001/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      });
      const result = await response.json();

      const { success, message, jwtToken, name, error } = result; // Extract success, message, error from result
      if (success) {
        alert(message);
        localStorage.setItem('token', jwtToken); // Storing JWT token in localStorage
        localStorage.setItem('loggedInUser', name); // Storing user name in localStorage
        setTimeout(() => {
          router.push("/"); // Navigating to "/" route after successful login
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message;
        alert(details);
      } else if (!success) {
        alert(message);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
    <div className="md:ml-64">
    <Header token={token} username={username} />
      <section className="min-h-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleLogin} className="space-y-6">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input onChange={handleChange} value={loginInfo.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" autoComplete="off" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input onChange={handleChange} value={loginInfo.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" autoComplete="off" required />
            </div>

            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered? <Link href="/signup" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
            </div>
          </form>
        </div>
      </section>
      </div>
    </>
  );
};

export default Loginpage;
