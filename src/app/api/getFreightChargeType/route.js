// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import FreightCharge from "@/models/freightChargeTypeModel";
import { NextResponse } from "next/server";

connect(); // Connect to the database

export async function GET() {
    try {
        // Fetch all vehicle types from the database
        const FreightCharges = await FreightCharge.find();
        console.log(FreightCharges, "FreightCharges");

        return NextResponse.json({
            message: "FreightCharge types fetched successfully",
            success: true,
            data: FreightCharges,
        }, { status: 200 });

    } catch (error) {
        // Handle any errors that occur
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
