"use client";
import Login from "@/app/component/Login";
import { useSelector } from "react-redux";
// import ProtectedRoute from "@/app/component/ProtectedRoute";

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
    <main className="min-h-screen  antialiased  ">
      {/* <ProtectedRoute> */}
      <Login />
      {/* </ProtectedRoute> */}
    </main>
  );
}
