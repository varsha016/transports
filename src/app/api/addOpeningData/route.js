// app/api/opening-bills/route.js

import { connect } from "@/dbConfig/dbConfig";
import Bill from "@/models/openingbillModel";
import { NextResponse } from "next/server";

// Connect to the database
connect();

// POST request to create a new Bill
export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { partyName, billType, billNo, billDate, billAmount } = reqBody.Bill;

        // Create a new Bill entry
        const newBill = new Bill({
            partyName,
            billType,
            billNo,
            billDate,
            billAmount,
        });

        const savedBill = await newBill.save();

        return NextResponse.json(
            {
                message: "Bill added successfully",
                success: true,
                data: savedBill,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error adding bill:", error);
        return NextResponse.json(
            { error: "Failed to add bill", details: error.message },
            { status: 500 }
        );
    }
}
