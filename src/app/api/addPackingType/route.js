import { connect } from "@/dbConfig/dbConfig";
import Packing from "@/models/packingTypeModel";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { packingType } = reqBody;
        console.log(reqBody, "reqbody");
        console.log(packingType, "packingType");

        // Validate packingType
        if (!packingType || typeof packingType !== "string") {
            console.error("Invalid packingType value:", packingType);
            return NextResponse.json(
                { error: "Packing type is required and must be a string" },
                { status: 400 }
            );
        }

        // Create a new Packing instance
        const newPacking = new Packing({
            type: packingType,
        });

        // Save the new packing type
        const savedPacking = await newPacking.save();
        console.log(savedPacking, "savedPacking");

        return NextResponse.json({
            message: "Packing type registered successfully",
            success: true,
            data: savedPacking,
        }, { status: 200 });

    } catch (error) {
        console.error("Error adding packing type:", error);

        // Handle duplicate key error
        if (error.code === 11000) {
            return NextResponse.json(
                { error: "Packing type already exists" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: "Failed to add packing type", details: error.message },
            { status: 500 }
        );
    }
}
