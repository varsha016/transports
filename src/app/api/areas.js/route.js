// /pages/api/area/route.js
import { connect } from "@/dbConfig/dbConfig"; // Ensure this path is correct
import Area from "@/models/areasModel"; // Adjust the path to where your Area model is stored
import { NextResponse } from "next/server";

connect(); // Initialize the MongoDB connection

export async function POST(request) {
  try {
    // Parse the JSON body from the request
    const reqBody = await request.json();
    const { id, cid, state_id, city_id, name } = reqBody;

    // Create a new Area document
    const newArea = new Area({
      id,
      cid,
      state_id,
      city_id,
      name,
    });

    // Save the new area document to the database
    const savedArea = await newArea.save();

    // Send a success response with the newly created area
    return NextResponse.json({
      message: "Area created successfully",
      area: savedArea,
    }, { status: 201 });

  } catch (error) {
    // Send an error response if there's an issue
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
