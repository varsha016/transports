// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import FreightCharge from "@/models/freightChargeTypeModel"; // Assuming you create a vehicleModel.js file

import { NextResponse } from "next/server";

connect(); // Connect to the database

export async function POST(request) {
    try {
        const reqBody = await request.json();
        console.log(reqBody, "FreightCharge");

        // Create new location with the data from reqBody.addFreightCharge
        const newLFreightCharge = new FreightCharge(reqBody.addFreightChargeData);
        console.log(newLFreightCharge, "newLFreightCharge");

        const savedLFreightCharge = await newLFreightCharge.save();
        console.log(savedLFreightCharge, "savedLFreightCharge");

        return NextResponse.json({
            message: "FreightCharge registered successfully",
            success: true,
            data: savedLFreightCharge,
        }, { status: 200 });

    } catch (error) {
        console.error("Error adding location:", error); // Log the entire error object
        return NextResponse.json({ error: "Failed to add location", details: error.message }, { status: 500 });
    }
}
