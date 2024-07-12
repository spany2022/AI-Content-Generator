"use client";
import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/app/dashboard/_components/Header';

interface SignupInfo {
  name: string;
  email: string;
  password: string;
}

const Signuppage: React.FC = () => {
  // State to store user input for sign up
  const [signupInfo, setSignupInfo] = useState<SignupInfo>({
    name: '',
    email: '',
    password: ''
  });

  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('loggedInUser');
    setToken(storedToken);
    setUsername(storedUsername);
  }, []);

  const router = useRouter();

  // Function to handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Destructure name and value from event target
    const { name, value } = e.target;
    console.log(name, value);
    // Create a copy of the current signup info and update the changed field
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name as keyof SignupInfo] = value;
    setSignupInfo(copySignupInfo);
  };

  // Function to handle form submission
  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    // Prevent default form submission
    e.preventDefault();
    // Destructure name, email, and password from state
    const { name, email, password } = signupInfo;
    // Show error if any field is missing
    if (!name || !email || !password) {
      return alert("Name, email and password are required");
    }
    try {
      const url = "http://localhost:3001/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json' // Set content type to JSON
        },
        body: JSON.stringify(signupInfo) // Send signup info as JSON
      });
      const result = await response.json();

      const { success, message, error } = result; // Destructure response
      if (success) {
        alert(message);
        setTimeout(() => {
          router.push("/login"); // Redirect to login page after a short delay
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
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
          <form onSubmit={handleSignup} className="space-y-6">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
              <input onChange={handleChange} value={signupInfo.name} type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" autoComplete="off" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input onChange={handleChange} value={signupInfo.email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" autoComplete="off" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input onChange={handleChange} value={signupInfo.password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" autoComplete="off" required />
            </div>

            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
              Already Have Account? <Link href="/login" className="text-blue-700 hover:underline dark:text-blue-500">Login to your account</Link>
            </div>
          </form>
        </div>
      </section>
      </div>
    </>
  );
};

export default Signuppage;
