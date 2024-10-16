// Import necessary modules
import { connect } from "@/dbConfig/dbConfig";
import Branch from "@/models/branchModel";
import { NextResponse } from "next/server";

// Connect to the database
connect();

// POST request to create a new Branch
export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { type, type1, branchName, contactPerson, address, location } = reqBody.Branch;

        // Validate the required fields (optional validation)
        // if (!type || !branchName || !address) {
        //   return NextResponse.json(
        //     { error: "Type, Branch Name, and Address are required" },
        //     { status: 400 }
        //   );
        // }

        // Create a new Branch with the provided data
        const newBranch = new Branch({
            type,
            type1,
            branchName,
            contactPerson,
            address,
            location
        });

        const savedBranch = await newBranch.save();

        return NextResponse.json(
            {
                message: "Branch added successfully",
                success: true,
                data: savedBranch
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error adding branch:", error);
        return NextResponse.json(
            { error: "Failed to add branch", details: error.message },
            { status: 500 }
        );
    }
}


