import React from 'react';
import { motion } from 'framer-motion';

const OurServices = () => {
    // Animation variants for the service cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-white py-16">
            {/* Title Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold uppercase tracking-wide">Our Services</h2>
                <div className="flex justify-center items-center mt-4">
                    <div className="w-16 h-1 bg-red-600 mx-2"></div>
                    <span className="text-red-600 text-xl font-bold">|</span>
                    <div className="w-16 h-1 bg-red-600 mx-2"></div>
                </div>
            </div>

            {/* Services Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16">
                {/* Service Card 1 */}
                <motion.div 
                    className="bg-gray-100 p-6 rounded-lg flex items-center shadow-lg"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                >
                    <div className="flex-shrink-0 bg-gray-200 p-4 rounded-full">
                        {/* Icon */}
                        <svg className="w-8 h-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-bold uppercase">Ground Transport</h3>
                        <p className="text-gray-600">Transport began providing transportation solutions to Transport's contract warehousing customers in the 1980s.</p>
                    </div>
                </motion.div>

                {/* Service Card 2 */}
                <motion.div 
                    className="bg-gray-100 p-6 rounded-lg flex items-center shadow-lg"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                >
                    <div className="flex-shrink-0 bg-gray-200 p-4 rounded-full">
                        {/* Icon */}
                        <svg className="w-8 h-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-bold uppercase">Warehousing</h3>
                        <p className="text-gray-600">Transport provides warehousing, fulfillment services, and transportation management across North America.</p>
                    </div>
                </motion.div>

                {/* Service Card 3 */}
                <motion.div 
                    className="bg-gray-100 p-6 rounded-lg flex items-center shadow-lg"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                >
                    <div className="flex-shrink-0 bg-gray-200 p-4 rounded-full">
                        {/* Icon */}
                        <svg className="w-8 h-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-bold uppercase">Packaging and Storage</h3>
                        <p className="text-gray-600">Transport offers complete, customized solutions for all of your business storage needs.</p>
                    </div>
                </motion.div>

                {/* Service Card 4 */}
                <motion.div 
                    className="bg-gray-100 p-6 rounded-lg flex items-center shadow-lg"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
                >
                    <div className="flex-shrink-0 bg-gray-200 p-4 rounded-full">
                        {/* Icon */}
                        <svg className="w-8 h-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" />
                        </svg>
                    </div>
                    <div className="ml-4">
                        <h3 className="text-xl font-bold uppercase">Logistic Service</h3>
                        <p className="text-gray-600">Transport offers a host of logistic management services and supply chain solutions.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default OurServices;
