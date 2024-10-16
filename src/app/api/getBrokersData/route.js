// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import Broker from "@/models/brokersModel"; // Assuming you have a consignerModel.js file
import { NextResponse } from "next/server";

connect(); // Connect to the database

export async function GET() {
    try {
        // Fetch all consigners from the database
        const broker = await Broker.find({});
        console.log(broker, "Fetched broker");

        return NextResponse.json({
            message: "broker fetched successfully",
            success: true,
            broker,
        }, { status: 200 });

    } catch (error) {
        console.error("Error fetching broker:", error); // Log the entire error object
        return NextResponse.json({ error: "Failed to fetch broker", details: error.message }, { status: 500 });
    }
}
