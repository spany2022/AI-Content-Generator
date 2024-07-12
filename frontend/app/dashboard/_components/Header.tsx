// "use client"
// import { Search } from 'lucide-react';
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// const Header: React.FC = () => {
//   const [token, setToken] = useState<string | null>(null);
//   const [username, setUsername] = useState<string | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     const storedUsername = localStorage.getItem('loggedInUser');
//     setToken(storedToken);
//     setUsername(storedUsername);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('loggedInUser');
//     setToken(null);
//     setUsername(null);
//     router.push('/login'); // Redirect to login page
//   };

//   const getFirstName = (fullName: string | null) => {
//     return fullName ? fullName.split(' ')[0] : '';
//   };

//   return (
//     <>
//       <div className="p-5 shadow-sm border-b-2 bg-white flex justify-between items-center">
//         <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
//           <Search />
//           <input type="text" placeholder="Search..." className="outline-none" />
//         </div>
//         <div className="flex items-center gap-4">
//           {!token ? (
//             <button
//               onClick={() => router.push('/login')}
//               className="bg-primary text-white px-4 py-2 rounded-md"
//             >
//               Login
//             </button>
//           ) : (
//             <>
//               <span className="text-gray-700">{getFirstName(username)}</span>
//               <button
//                 onClick={handleLogout}
//                 className="bg-primary text-white px-4 py-2 rounded-md"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;



"use client"
import { Search } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  token: string | null;
  username: string | null;
}

const Header: React.FC<HeaderProps> = ({ token, username }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    router.push('/login'); // Redirect to login page
  };

  const getFirstName = (fullName: string | null) => {
    return fullName ? fullName.split(' ')[0] : '';
  };

  return (
    <div className="p-5 shadow-sm border-b-2 bg-white flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg bg-white">
        <Search />
        <input type="text" placeholder="Search..." className="outline-none" />
      </div>
      <div className="flex items-center gap-4">
        {!token ? (
          <button
            onClick={() => router.push('/login')}
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            Login
          </button>
        ) : (
          <>
            <span className="text-gray-700">{getFirstName(username)}</span>
            <button
              onClick={handleLogout}
              className="bg-primary text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
