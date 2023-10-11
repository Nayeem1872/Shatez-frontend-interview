'use client'
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa'; 

export default function Home() {
  const [role, setRole] = useState<string | undefined>(undefined);

  const handleLogin = async (selectedRole: string) => {
    setRole(selectedRole);
  };

  const handleGoogleLogin = async () => {
    // Use signIn function with the role as a query parameter
    const result = await signIn('google', { role });
    
    // If you want to pass additional data, use it like this:
    // await signIn('google', { role, otherData: 'value' });
  };
  console.log(handleGoogleLogin);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* User and Admin Options */}
      <h1 className="text-3xl font-semibold mb-8">
        Shatez Frontend Interview Task
      </h1>
      {/* <div className="mb-4 flex space-x-4">
        <button
          onClick={() => handleLogin('user')}
          className="px-4 py-2 border rounded-md hover-bg-gray-100 focus:outline-none focus:ring focus-ring-gray-300 active:bg-gray-200"
        >
          User
        </button>
        <button
          onClick={() => handleLogin('admin')}
          className="px-4 py-2 border rounded-md hover-bg-gray-100 focus:outline-none focus:ring focus-ring-gray-300 active:bg-gray-200"
        >
          Admin
        </button>
      </div> */}

      {/* Login with Gmail Button */}
      <button
        onClick={handleGoogleLogin} // Call the new function
        className="flex items-center px-4 py-2 border rounded-md bg-white hover-bg-gray-100 focus:outline-none focus-ring focus-ring-gray-300"
      >
        <FaGoogle className="mr-2" /> Login with Gmail
      </button>
    </main>
  );
}
