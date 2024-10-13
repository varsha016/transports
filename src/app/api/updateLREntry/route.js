import { connect } from '@/dbConfig/dbConfig';
import LREntry from '@/models/lrEntryForm';
import { NextResponse } from 'next/server';

connect();

export async function PUT(request) {
    try {
        const reqBody = await request.json();
        
        console.log(reqBody,"reqBody");
        // Extract the ID from the request body
        const { id, ...updateData } = reqBody;
console.log(id,"id");

        // Make sure the ID is provided
        if (!id) {
            return NextResponse.json({ message: 'ID is required' }, { status: 400 });
        }

        // Find the entry by ID and update it
        const updatedEntry = await LREntry.findByIdAndUpdate(id, updateData, { new: true });

        if (!updatedEntry) {
            return NextResponse.json({ message: 'Entry not found' }, { status: 404 });
        }

        return NextResponse.json({
            message: 'LR Entry updated successfully',
            success: true,
            data: updatedEntry,
        }, { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
