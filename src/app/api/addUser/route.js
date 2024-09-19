import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from 'bcryptjs';
import { sendEmail } from "@/helpers/mailer";

connect();
console.log(connect(),"connect function called");

export async function POST(request) { 
    try {
        const reqBody = await request.json();
        const { name, email, password,userType } = reqBody;
        console.log(reqBody);

        // Check if the admin already exists
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "user already exists" }, { status: 400 });
        }

        // Generate salt and hash the password
        const salt = await bcryptjs.genSalt(10);
        console.log(salt);

        const hashedPassword = await bcryptjs.hash(password, salt);
        console.log(hashedPassword);

        // Create new admin
        const newUser = new User({
            name,
            email,
            userType,
            password: hashedPassword,
       
        });
        console.log(newUser,"newUser");

        const savedUser = await newUser.save();
        console.log(savedUser,"savedUser");

        // Send verification email
        // await sendEmail({ email, emailType: "VERIFY", userId: savedAdmin._id });

        return NextResponse.json({
            message: " registered successfully",
            success: true,
            savedUser
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}