// // "use client";
// // import Login from "@/app/component/Login";
// // import { useSelector } from "react-redux";
// // import truck from '@/asset/image/loginpageimg.jpg'
// // // import ProtectedRoute from "@/app/component/ProtectedRoute";

// // export default function Home() {
// //   const { isAuthenticated, token, userType } = useSelector(
// //     (state: any) => state.auth
// //   );
// //   console.log(
// //     "Authenticated:",
// //     isAuthenticated,
// //     "Token:",
// //     token,
// //     "UserType:",
// //     userType
// //   );

// //   return (
// //     <main className="min-h-screen  antialiased  ">
// //       {/* <ProtectedRoute> */}
// //       <Login />
// //       {/* </ProtectedRoute> */}
// //     </main>
// //   );
// // }

// "use client";
// import Login from "@/app/component/Login";
// import { useSelector } from "react-redux";
// import truck from "@/asset/image/loginpageimg.jpg"; // Importing the truck image

// export default function Home() {
//   const { isAuthenticated, token, userType } = useSelector(
//     (state) => state.auth
//   );
//   console.log(
//     "Authenticated:",
//     isAuthenticated,
//     "Token:",
//     token,
//     "UserType:",
//     userType
//   );

//   return (
//     <main
//       className="min-h-screen flex justify-center items-center bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${truck})`, // Corrected to use truck directly
//       }}
//     >
//       <div className="mr-[48rem] bg-opacity-90 p-8 rounded-2xl shadow-lg max-w-md w-full">
//         <Login />
//       </div>
//     </main>
//   );
// }

"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation"; // Use useRouter for navigation in Next.js 13
import Login from "@/app/component/Login";
import truck from "@/asset/image/loginpageimg.jpg"; // Importing the truck image

export default function Home() {
  const { isAuthenticated, token, userType } = useSelector(
    (state) => state.auth
  );
  const router = useRouter();

  useEffect(() => {
    // If the user is already authenticated, navigate to the home page
    if (isAuthenticated) {
      router.push("/home");
    }
  }, [isAuthenticated, router]);

  // If not authenticated, render the login page
  return (
    <main
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${truck})`,
      }}
    >
      <div className="mr-[48rem] bg-opacity-90 p-8 rounded-2xl shadow-lg max-w-md w-full">
        <Login />
      </div>
    </main>
  );
}

