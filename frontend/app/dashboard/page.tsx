"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import SearchSection from './_components/SearchSection'
import TempleListSection from './_components/TempleListSection'
import Header from './_components/Header'
import Loading from './../_components/Loading';

const Dashboard: React.FC = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>('');
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = localStorage.getItem('token');
      const storedUsername = localStorage.getItem('loggedInUser');

      if (storedToken && storedUsername) {
        setToken(storedToken);
        setUsername(storedUsername);
      } else {
        router.push('/login');
      }

      // Ensure loading is displayed for at least 1000ms
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    checkToken();
  }, [router]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
    <div className="md:ml-64">
    <Header token={token} username={username} />
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value:string) =>setUserSearchInput(value)}/>

      {/* Template list section */}
      <TempleListSection userSearchInput={userSearchInput} />
    </div>
    </div>
    </>
  )
}

export default Dashboard
