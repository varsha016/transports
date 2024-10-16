// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import Consigner from "@/models/consignerModel"; // Assuming you create a consignerModel.js file
import { NextResponse } from "next/server";

connect(); // Connect to the database

export async function POST(request) {
    try {
        const reqBody = await request.json();
        console.log(reqBody, "Consigner");

        const { consignerName, contactPerson, address, town1, town2 } = reqBody.Consigner;

        // Validate the required fields
        // if (!consignerName || !contactPerson || !address) {
        //     return NextResponse.json(
        //         { error: "Consigner Name, Contact Person, and Address are required" },
        //         { status: 400 }
        //     );
        // }

        // Create a new consigner with the extracted data
        const newConsigner = new Consigner({
            consignerName,
            contactPerson,
            address,
            town1,
            town2,
        });

        const savedConsigner = await newConsigner.save();
        console.log(savedConsigner, "savedConsigner");

        return NextResponse.json({
            message: "Consigner registered successfully",
            success: true,
            data: savedConsigner,
        }, { status: 200 });

    } catch (error) {
        console.error("Error adding consigner:", error);
        return NextResponse.json({ error: "Failed to add consigner", details: error.message }, { status: 500 });
    }
}
