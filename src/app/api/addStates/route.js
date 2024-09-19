import { connect } from "@/dbConfig/dbConfig"; // Ensure the path is correct
import State from "@/models/stateModel"; // Adjust the path as needed
import { NextResponse } from "next/server";

connect(); // Initialize the MongoDB connection

// Define the POST function to handle state creation
export async function POST(request) {
  try {
    const reqBody = await request.json();  
    const { _id, id, cid, name } = reqBody;  

    // Check if a state with the same id already exists
    const existingState = await State.findOne({ id });
    if (existingState) {
      return NextResponse.json({ error: "State with this ID already exists" }, { status: 400 });
    }

    // Create a new State document
    const newState = new State({
      _id, // Optional: If you want to specify the _id explicitly
      id,
      cid,
      name,
    });

    // Save the new state document to the database
    const savedState = await newState.save();

    // Send a success response with the newly created state
    return NextResponse.json({
      message: "State created successfully",
   savedState
    }, { status: 201 });

  } catch (error) {
    // Send an error response if there's an issue
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}