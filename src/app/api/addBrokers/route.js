// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import Broker from "@/models/brokersModel";
import { NextResponse } from "next/server";

connect(); // Connect to the database

export async function POST(request) {
    try {
        const reqBody = await request.json();
        console.log(reqBody, "Broker");

        const { brokerName, contactPerson, address, panNo } = reqBody.Broker;

        // Validate the required fields
        // if (!consignerName || !contactPerson || !address) {
        //     return NextResponse.json(
        //         { error: "Broker Name, Contact Person, and Address are required" },
        //         { status: 400 }
        //     );
        // }

        // Create a new Brokers with the extracted data
        const newBrokers = new Broker({
            brokerName,
            contactPerson,
            address,
            panNo
        });

        const savedBrokers = await newBrokers.save();
        console.log(savedBrokers, "savedBrokers");

        return NextResponse.json({
            message: "Broker registered successfully",
            success: true,
            data: savedBrokers,
        }, { status: 200 });

    } catch (error) {
        console.error("Error adding savedBrokers:", error);
        return NextResponse.json({ error: "Failed to add savedBrokers", details: error.message }, { status: 500 });
    }
}
