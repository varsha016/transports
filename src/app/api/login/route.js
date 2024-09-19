import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";

// Connect to the database
connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Find user by email
    const user = await User.findOne({ email });
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Validate password
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Check if user is verified
    if (!user.isVerified) {
      return NextResponse.json({ error: "Account not verified" }, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, userType: user.userType },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return NextResponse.json({
      message: "Login successful",
      success: true,
      token,
      userType: user.userType,
      user: {
        id: user._id,
        email: user.email,
        userType: user.userType
      }
    }, { status: 200 });

  } catch (error) {
    console.error("Login Error:", error.message);
    return NextResponse.json({ error: "An unexpected error occurred", success: false }, { status: 500 });
  }
}
