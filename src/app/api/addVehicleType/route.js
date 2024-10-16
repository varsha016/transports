// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import Vehicle from "@/models/vehicleTypeModel"; // Assuming you create a vehicleModel.js file

import { NextResponse } from "next/server";

connect(); // Connect to the database

export async function POST(request) {
    try {

        const reqBody = await request.json();
        console.log(reqBody, "vehicleType");
        const { vehicleType } = reqBody;

        // Check if the vehicle type already exists
        // const existingVehicle = await Vehicle.findOne({ type: vehicleType });
        // if (existingVehicle) {
        //     return NextResponse.json({ error: "Vehicle type already exists" }, { status: 400 });
        // }

        // Create new vehicle type
        const newVehicle = new Vehicle({
            type: vehicleType,
        });
        console.log(newVehicle, "newVehicle");

        const savedVehicle = await newVehicle.save();
        console.log(savedVehicle, "savedVehicle");

        return NextResponse.json({
            message: "Vehicle type registered successfully",
            success: true,
            savedVehicle,
        }, { status: 200 });



    } catch (error) {
        console.error("Error adding vehicle type:", error); // Log the entire error object
        return NextResponse.json({ error: "Failed to add vehicle type", details: error.message }, { status: 500 });
    }
}
