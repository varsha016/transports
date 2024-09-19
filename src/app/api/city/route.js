import { connect } from "@/dbConfig/dbConfig"; 
import City from "@/models/cityModel"; 
import State from "@/models/stateModel";  
import { NextResponse } from "next/server";
import mongoose from 'mongoose';

connect();  

export async function POST(request) {
  try {
    const reqBody = await request.json();  
    const { id, cid, state_id, name } = reqBody; 
    console.log("Received state_id:", state_id);

    // Convert state_id to ObjectId if necessary
    let stateObjectId;
    try {
      stateObjectId = mongoose.Types.ObjectId(state_id);
    } catch (error) {
      return NextResponse.json({ error: "Invalid state_id format" }, { status: 400 });
    }

    // Validate that the provided state_id exists in the State collection
    const state = await State.findById(stateObjectId);
    console.log("Found state:", state);
    
    if (!state) {
      return NextResponse.json({ error: "Invalid state_id: State not found" }, { status: 400 });
    }

    // Create a new City document
    const newCity = new City({
      id,
      cid,
      state_id,
      name,
    });

    // Save the new city document to the database
    const savedCity = await newCity.save();

    // Send a success response with the newly created city
    return NextResponse.json({
      message: "City created successfully",
      city: savedCity
    }, { status: 201 });

  } catch (error) {
    // Send an error response if there's an issue
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
