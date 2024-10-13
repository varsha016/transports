// import React from 'react';
// import { motion } from 'framer-motion';
// import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from '@heroicons/react/outline'; // Import the icons from Heroicons

// const ContactInfo = () => {
//     const contactDetails = [
//         {
//             icon: <PhoneIcon className="w-5 h-5 mr-2 text-gray-500" />,
//             text: "1-775-97-377",
//         },
//         {
//             icon: <MailIcon className="w-5 h-5 mr-2 text-gray-500" />,
//             text: "info@thememove.com",
//         },
//         {
//             icon: <MapPinIcon className="w-5 h-5 mr-2 text-gray-500" />,
//             text: "14 Tottenham Road, London, England.",
//         },
//         {
//             icon: <ClockIcon className="w-5 h-5 mr-2 text-gray-500" />,
//             text: "Mon - Sat : 9AM - 6PM",
//         },
//     ];

//     return (
//         <div className="grid grid-cols-1 gap-4 p-6 bg-white rounded-md shadow-lg">
//             {contactDetails.map((detail, index) => (
//                 <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }} // Initial state
//                     animate={{ opacity: 1, y: 0 }} // Animate to this state
//                     transition={{ duration: 0.3, delay: index * 0.1 }} // Add delay for each item
//                     className="flex items-center p-2 border-b last:border-b-0"
//                 >
//                     {detail.icon}
//                     <span className="text-md text-gray-700">{detail.text}</span>
//                 </motion.div>
//             ))}
//         </div>
//     );
// };

// export default ContactInfo;
