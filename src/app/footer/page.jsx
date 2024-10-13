// Footer.js
import Image from 'next/image';
import React from 'react';
import logo1 from "../../asset/image/logo1.png";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Us Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold">ABOUT US</h2>
                        <p>
                            <p className='flex gap-3 text-lg font-bold'>
                                <Image src={logo1} className='w-16 h-16 ' />
                                <span className='py-4'> Vishwas Transport</span>
                            </p>
                            Transport offers a host of logistic management services and supply chain solutions. We provide innovative solutions with the best people, processes, and technology.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Media Icons */}
                            <a href="#" className="hover:text-red-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    {/* Facebook Icon */}
                                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h21.351C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0zM12 24V12h-3v12H5V12H1V8h4V5c0-3.313 1.992-5 4.786-5C12.51 0 12 1.28 12 2.5V5h3l-1 4h-2v12h5z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-red-600">
                                {/* Twitter Icon */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.635 4.528a9.871 9.871 0 0 1-2.828.775 4.955 4.955 0 0 0 2.165-2.723 9.887 9.887 0 0 1-3.127 1.195A4.935 4.935 0 0 0 16.614 3c-2.73 0-4.942 2.208-4.942 4.922 0 .386.044.765.129 1.127C7.691 8.795 4.066 6.736 1.64 3.72a4.933 4.933 0 0 0-.667 2.477c0 1.707.867 3.208 2.188 4.083a4.895 4.895 0 0 1-2.23-.616v.062c0 2.391 1.693 4.38 3.949 4.837-.417.112-.857.173-1.308.173-.319 0-.635-.031-.942-.086.635 1.971 2.477 3.404 4.66 3.44-1.72 1.346-3.88 2.145-6.223 2.145-.4 0-.791-.023-1.175-.067 2.186 1.398 4.779 2.212 7.549 2.212 9.057 0 14.014-7.49 14.014-13.977 0-.213-.005-.425-.014-.636A9.935 9.935 0 0 0 24 4.59c-.878.39-1.824.653-2.885.771a4.946 4.946 0 0 0 2.164-2.726z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-red-600">
                                {/* YouTube Icon */}
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186c-.247-1.15-.975-2.07-2.07-2.297C19.325 3.5 12 3.5 12 3.5s-7.325 0-9.428.389C.475 4.116-.249 5.036 0 6.186c.248 1.15 1.187 1.94 2.428 2.187 2.103.388 9.572.388 9.572.388s7.325 0 9.428-.388c1.241-.247 2.18-1.037 2.427-2.187zM9.547 15.992v-7.99l6.017 3.996-6.017 3.994z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Information Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold">INFORMATION</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-red-600">About Us</a></li>
                            <li><a href="#" className="hover:text-red-600">Cart</a></li>
                            <li><a href="#" className="hover:text-red-600">Contact</a></li>
                            <li><a href="#" className="hover:text-red-600">Our Services</a></li>
                            <li><a href="#" className="hover:text-red-600">Classic Blog</a></li>
                        </ul>
                    </div>

                    {/* Transport Office Section */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold">TRANSPORT OFFICE</h2>
                        <p>14 Tottenham Road, Ch.Sambhaji Nagar ChikalThana , India.</p>
                        <p>(91) 6666 8888</p>
                        <p>info@thememove.com</p>
                        <p>(91) 8888 9999</p>
                        <p>Mon - Sat: 9:00 - 18:00</p>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-red-600 text-center py-4">
                <p className="text-sm">Made with ♥ by ThemeMove.com.</p>
            </div>
        </footer>
    );
};

export default Footer;
