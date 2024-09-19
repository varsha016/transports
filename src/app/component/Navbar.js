  // "use client";
  // import React, { useState } from 'react';
  // import Link from 'next/link';
  // import { FaBars, FaTimes } from 'react-icons/fa';
  // import { useDispatch, useSelector } from 'react-redux';
  // import { logout } from '../lib/features/users/loginSlice';
  // import { useRouter } from 'next/navigation';

  // const Navbar = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const dispatch = useDispatch();
  //    const route = useRouter();
    
    
  //   const { isAuthenticated, user, token, userType } = useSelector((state) => state.auth);
  //   console.log(isAuthenticated, user, token, userType);
    
  //   const toggleMenu = () => {
  //     setIsOpen(!isOpen);
  //   };
  //   const handleLogout = () => {
  //     dispatch(logout());
  //     setIsOpen(false);
  //     route.push('/');
  //   }

  //   return (
  //     <nav className="bg-gray-800 p-4 w-full rounded-sm">
  //       <div className="container mx-auto flex justify-between items-center">
  //         <div className="text-white text-lg font-semibold">
  //           <Link href="/@">App</Link>
  //         </div>
  //         <div className="md:hidden">
  //           <button onClick={toggleMenu} className="text-white focus:outline-none">
  //             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
  //           </button>
  //         </div>
  //         <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
  //           <ul className="md:flex md:space-x-6">
  //             <>
  //               <li className="text-white hover:text-gray-400">
  //                 <Link href="/home">Home</Link>
  //               </li>
  //               {userType === "3" && (
  //                 <>
  //                   <li className="text-white hover:text-gray-400">
  //                     <Link href="/LREntryTable">LREntryTable</Link>
  //                   </li>
  //                   <li className="text-white hover:text-gray-400">
  //                     <Link href="/memo">Memo Form</Link>
  //                   </li>
  //                 </>
  //               )}
  //             </>
  //             <button onClick={handleLogout} className='text-white'>
  //               Logout
  //             </button>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   );
  // };

  // export default Navbar;
  ///////////////////////
  "use client";
  import React, { useState, useEffect } from 'react';
  import Link from 'next/link';
  import { FaBars, FaTimes } from 'react-icons/fa';
  import { useDispatch, useSelector } from 'react-redux';
  import { logout } from '../lib/features/users/loginSlice';
  import { useRouter } from 'next/navigation';

  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();

    // Extract necessary auth state
    const { isAuthenticated, token, userType } = useSelector((state) => state.auth);
    console.log("Authenticated:", isAuthenticated, "Token:", token, "UserType:", userType);

    // Toggle the menu for mobile
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    // Handle user logout and redirect to the login page
    const handleLogout = () => {
      dispatch(logout());
      setIsOpen(false);
      router.push('/'); // Redirect to login page after logout
    };

    // If token is not available, redirect to login page immediately
    useEffect(() => {
      if (!token) {
        router.push('/'); // Redirect to login page if no token
      }
    }, [token, router]);

    return  (
      <nav className="bg-gray-800 p-4 w-full rounded-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-semibold">
            <Link href="/@">App</Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="md:flex md:space-x-6">
              <>
                <li className="text-white hover:text-gray-400">
                  <Link href="/home">Home</Link>
                </li>
                {userType === "3" && (
                  <>
                    <li className="text-white hover:text-gray-400">
                      <Link href="/LREntryTable">LREntryTable</Link>
                    </li>
                    <li className="text-white hover:text-gray-400">
                      <Link href="/memoTable">Memo Data</Link>
                    </li>
                  </>
                )}
              </>
              <button onClick={handleLogout} className='text-white'>
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    )  // If no token, do not display navbar
  };

  export default Navbar;
