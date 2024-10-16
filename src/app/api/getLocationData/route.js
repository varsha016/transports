// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import Location from "@/models/locationModel";
import { NextResponse } from "next/server";

connect(); // Connect to the database

export async function GET() {
    try {

        const locations = await Location.find();
        console.log(locations, "locations");
        // const memos = await Memo.find();
        // return NextResponse.json({ success: true, memos });
        // Return the list of locations with a success message
        return NextResponse.json({
            message: "Location types fetched successfully",
            success: true,
            data: locations,
        }, { status: 200 });

    } catch (error) {
        // Handle any errors that occur
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
