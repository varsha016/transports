// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import Location from "@/models/locationModel"; // Assuming you create a vehicleModel.js file

import { NextResponse } from "next/server";

connect(); // Connect to the database

export async function POST(request) {
    try {
        const reqBody = await request.json();
        console.log(reqBody, "Location");

        // Create new location with the data from reqBody.addLocation
        const newLocation = new Location(reqBody.addLocation);
        console.log(newLocation, "newLocation");

        const savedLocation = await newLocation.save();
        console.log(savedLocation, "savedLocation");

        return NextResponse.json({
            message: "Location registered successfully",
            success: true,
            savedLocation,
        }, { status: 200 });

    } catch (error) {
        console.error("Error adding location:", error); // Log the entire error object
        return NextResponse.json({ error: "Failed to add location", details: error.message }, { status: 500 });
    }
}
