// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import Packing from "@/models/packingTypeModel";
import { NextResponse } from "next/server";

connect(); // Connect to the database

export async function GET() {
    try {
        // Fetch all packing types from the database
        const packing = await Packing.find({});
        console.log(packing, "packing");

        // Return the list of packing with a success message
        return NextResponse.json({
            message: "Packing types fetched successfully",
            success: true,
            data: packing,
        }, { status: 200 });

    } catch (error) {
        // Handle any errors that occur
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
