import React from "react";
import { motion } from "framer-motion";
import logo1 from "../../asset/image/logo1.png";
import Image from "next/image";

const TransportCard6 = () => {
    return (
        <div>
            <div className="flex gap-4 px-16 mt-14">
                {/* First Card */}
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}  // Scale up on hover
                    transition={{ duration: 0.5 }}
                    className="max-w-sm rounded-lg overflow-hidden shadow-2xl"
                >
                    <Image className="w-full h-40 object-cover" src={logo1} alt="Transport" />
                    <div className="px-3 py-4">
                        <h3 className="text-xl font-bold">International Shipping</h3>
                        <p className="text-gray-700 mt-2">
                            Get your goods delivered globally with ease.
                        </p>
                    </div>
                    <button className="text-lg  m-2 text-white hover:bg-black bg-slate-800 py-3 px-3 mt-5 rounded-md">Lear More</button>
                </motion.div>

                {/* Second Card */}
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-sm rounded-lg overflow-hidden shadow-2xl"
                >
                    <Image className="w-full h-40 object-cover" src={logo1} alt="Transport" />
                    <div className="px-3 py-4">
                        <h3 className="text-xl font-bold">LOGISTIC SERVICE</h3>
                        <p className="text-gray-700 mt-2">
                            Transport offers a host of logistic management services and supply chain solutions.
                        </p>
                    </div>
                    <button className="text-lg m-2  text-white hover:bg-black bg-slate-800 py-3 px-3 mt-5 rounded-md">Lear More</button>
                </motion.div>

                {/* Third Card */}
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-sm rounded-lg overflow-hidden shadow-2xl"
                >
                    <Image className="w-full h-40 object-cover" src={logo1} alt="Transport" />
                    <div className="px-3 py-4">
                        <h3 className="text-xl font-bold">International Shipping</h3>
                        <p className="text-gray-700 mt-2">
                            Get your goods delivered globally with ease.
                        </p>
                    </div>
                    <button className="text-lg m-2  text-white hover:bg-black bg-slate-800 py-3 px-3 mt-5 rounded-md">Lear More</button>
                </motion.div>
            </div>
        </div>
    );
};

export default TransportCard6;
