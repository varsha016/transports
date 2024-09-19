// /pages/api/vehicle/route.js
import { connect } from "@/dbConfig/dbConfig"; // Ensure this path is correct
import Vehicle from "@/models/vehicleModel"; // Adjust the path to where your Vehicle model is stored
import { NextResponse } from "next/server";

connect(); // Initialize the MongoDB connection

export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const reqBody = await request.json();
    const { id, cid, name, v_no } = reqBody;

    // Create a new Vehicle document
    const newVehicle = new Vehicle({
      id,
      cid,
      name,
      v_no,
    });

    // Save the new vehicle document to the database
    const savedVehicle = await newVehicle.save();

    // Send a success response with the newly created vehicle
    return NextResponse.json({
      message: "Vehicle created successfully",
      vehicle: savedVehicle,
    }, { status: 201 });

  } catch (error) {
    // Send an error response if there's an issue
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
