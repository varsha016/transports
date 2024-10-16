"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../lib/features/users/loginSlice";
import { useRouter } from "next/navigation";
import logo1 from "../../asset/image/logo1.png";
import ProfileDropdown from "../../app/ProfileDropdown/page";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const dispatch = useDispatch();
  const router = useRouter();

  const { isAuthenticated, token, userType } = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsOpen(false);
    router.push("/");
  };

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [token, router]);

  return (
    <nav className="bg-black text-gray-50 h-16 px-4 w-full rounded-sm py-1 relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <Image
            src={logo1}
            alt="Logo"
            className="rounded-full hover:translate-y-1 shadow-2xl hover:scale-105 w-24 h-12 py-2 px-1 scale-110"
          />

          {/* Main Links */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/home" className="p-3 hover:bg-slate-400">File</Link>

            {/* Transaction Dropdown */}
            <div className="relative group p-2">
              <Link href="#" className="p-3 hover:text-gray-400">
                Transaction
              </Link>
              <div className="absolute hidden group-hover:block bg-gray-600 text-white py-2 w-40 rounded-md mt-2 shadow-lg z-20">
                <ul className="flex flex-col">
                  <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                    <Link href="/lrEntryForm">Entry New LR</Link>
                  </li>
                  <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                    <Link href="/memo">Memo</Link>
                  </li>
                  <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                    <Link href="/LREntryTable">All LR Entries</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Other Dropdown Menus */}
            <div className="flex gap-4">
              {/* Reports */}
              <div className="relative group p-2">
                <Link href="#" className="p-3 hover:text-gray-400">Reports</Link>
                <div className="absolute hidden group-hover:block bg-gray-600 text-white py-2 w-40 rounded-md mt-2 shadow-lg z-20">
                  <ul className="flex flex-col">
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/reports/sub-option-1">Sub Option 1</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/reports/sub-option-2">Sub Option 2</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/reports/sub-option-3">Sub Option 3</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Accounts */}
              <div className="relative group p-2">
                <Link href="#" className="p-3 hover:text-gray-400">Accounts</Link>
                <div className="absolute hidden group-hover:block bg-gray-600 text-white py-2 w-40 rounded-md mt-2 shadow-lg z-20">
                  <ul className="flex flex-col">
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/accounts/sub-option-1">Sub Option 1</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/accounts/sub-option-2">Sub Option 2</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/accounts/sub-option-3">Sub Option 3</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Master */}
              <div className="relative group p-2">
                <Link href="#" className="p-3 hover:text-gray-400">Master</Link>
                <div className="absolute hidden group-hover:block bg-gray-600 text-white py-2 w-40 rounded-md mt-2 shadow-lg z-20">
                  <ul className="flex flex-col">
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/vehicleTypes">VehicleTypes</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/LocationForm">LocationForm</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/freightCharge">FreightCharge</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/packingTypes">PackingTypes</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/consignerForm">ConsignerForm</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/brokersForm">BrokersForm</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/Branches">Branches</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/OpeningBillsForm">OpeningBillsForm</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Administrator */}
              <div className="relative group p-2">
                <Link href="#" className="p-3 hover:text-gray-400">Administrator</Link>
                <div className="absolute hidden group-hover:block bg-gray-600 text-white py-2 w-40 rounded-md mt-2 shadow-lg z-20">
                  <ul className="flex flex-col">
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/administrator/sub-option-1">Sub Option 1</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/administrator/sub-option-2">Sub Option 2</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/administrator/sub-option-3">Sub Option 3</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Help */}
              <div className="relative group p-2">
                <Link href="#" className="p-3 hover:text-gray-400">Help</Link>
                <div className="absolute hidden group-hover:block bg-gray-600 text-white py-2 w-40 rounded-md mt-2 shadow-lg z-20">
                  <ul className="flex flex-col">
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/help/sub-option-1">Sub Option 1</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/help/sub-option-2">Sub Option 2</Link>
                    </li>
                    <li className="hover:bg-gray-800 hover:text-lg px-4 py-2">
                      <Link href="/help/sub-option-3">Sub Option 3</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Profile Dropdown */}
        <ProfileDropdown />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute bg-black text-gray-50 w-full left-0 top-16 shadow-lg z-20">
          <div className="flex flex-col items-start px-4 py-2">
            <Link href="/home" className="p-2 hover:bg-slate-400 w-full">File</Link>
            <Link href="/lrEntryForm" className="p-2 hover:bg-slate-400 w-full">Entry New LR</Link>
            <Link href="/memo" className="p-2 hover:bg-slate-400 w-full">Memo</Link>
            <Link href="/LREntryTable" className="p-2 hover:bg-slate-400 w-full">All LR Entries</Link>

            {/* Other dropdowns as buttons in mobile */}
            <button className="p-2 hover:bg-slate-400 w-full text-left">Reports</button>
            <button className="p-2 hover:bg-slate-400 w-full text-left">Accounts</button>
            <button className="p-2 hover:bg-slate-400 w-full text-left">Master</button>
            <button className="p-2 hover:bg-slate-400 w-full text-left">Administrator</button>
            <button className="p-2 hover:bg-slate-400 w-full text-left">Help</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
