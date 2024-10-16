// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import Vehicle from "@/models/vehicleTypeModel"; // Assuming you create a vehicleModel.js file
import { NextResponse } from "next/server";

connect(); // Connect to the database

export async function GET() {
    try {
        // Fetch all vehicle types from the database
        const vehicles = await Vehicle.find({});
        console.log(vehicles, "vehicles");

        // Return the list of vehicles with a success message
        return NextResponse.json({
            message: "Vehicle types fetched successfully",
            success: true,
            data: vehicles,
        }, { status: 200 });

    } catch (error) {
        // Handle any errors that occur
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
