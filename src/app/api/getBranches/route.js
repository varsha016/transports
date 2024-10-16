// GET request to fetch all Branches
import { connect } from "@/dbConfig/dbConfig";
import Branch from "@/models/branchModel";
import { NextResponse } from "next/server";

// Connect to the database
connect();

export async function GET() {
    try {
        const branches = await Branch.find({});
        return NextResponse.json(
            {
                message: "Branches fetched successfully",
                success: true,
                data: branches
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching branches:", error);
        return NextResponse.json(
            { error: "Failed to fetch branches", details: error.message },
            { status: 500 }
        );
    }
}