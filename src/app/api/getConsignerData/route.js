// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import Consigner from "@/models/consignerModel"; // Assuming you have a consignerModel.js file
import { NextResponse } from "next/server";

connect(); // Connect to the database

export async function GET() {
    try {
        // Fetch all consigners from the database
        const consigners = await Consigner.find({});
        console.log(consigners, "Fetched Consigners");

        return NextResponse.json({
            message: "Consigners fetched successfully",
            success: true,
            consigners,
        }, { status: 200 });

    } catch (error) {
        console.error("Error fetching consigners:", error); // Log the entire error object
        return NextResponse.json({ error: "Failed to fetch consigners", details: error.message }, { status: 500 });
    }
}
