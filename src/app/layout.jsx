





"use client"; // Ensure this component is a client component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Inter } from "next/font/google";
import "./globals.css"; // Import your global CSS file
import CompoNavbar from "@/app/CompoNavbar";

import StoreProvider from "@/app/StoreProvider"; // Ensure this path is correct
// import ProtectedRoute from '@/app/component/ProtectedRoute';


// Load a Google Font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // const token = useSelector((state) => state.auth.token);
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        {/* Wrap the entire app with StoreProvider */}
        {/* {token ? "Token is present" : "No token found"} */}
        <StoreProvider>

          <CompoNavbar />
          <div className="">
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}

