// "use client";
// import Login from "@/app/component/Login";
// import { useSelector } from "react-redux";
// import truck from '@/asset/image/loginpageimg.jpg'
// // import ProtectedRoute from "@/app/component/ProtectedRoute";

// export default function Home() {
//   const { isAuthenticated, token, userType } = useSelector(
//     (state: any) => state.auth
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
//     <main className="min-h-screen  antialiased  ">
//       {/* <ProtectedRoute> */}
//       <Login />
//       {/* </ProtectedRoute> */}
//     </main>
//   );
// }

"use client";
import Login from "@/app/component/Login";
import { useSelector } from "react-redux";
import truck from "@/asset/image/loginpageimg.jpg"; // Importing the truck image

export default function Home() {
  const { isAuthenticated, token, userType } = useSelector(
    (state: any) => state.auth
  );
  console.log(
    "Authenticated:",
    isAuthenticated,
    "Token:",
    token,
    "UserType:",
    userType
  );

  return (
    <main
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${truck.src})`, // Using the imported truck image as background
      }}
    >
      <div className=" mr-[48rem]  bg-opacity-90 p-8 rounded-2xl shadow-lg max-w-md w-full">
        <Login />
      </div>
    </main>
  );
}
