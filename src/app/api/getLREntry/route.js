

import { connect } from '@/dbConfig/dbConfig'; 
import LREntry from '@/models/lrEntryForm';
import { NextResponse } from 'next/server';

connect(); 
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id'); // Get the id from query parameters

    let lrEntries;
    if (id) {
      // Fetch a single LREntry by id
      lrEntries = await LREntry.findById(id);
    } else {
      // Fetch all LREntries
      lrEntries = await LREntry.find({});
    }

    if (!lrEntries) {
      return NextResponse.json({ error: 'No entries found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: lrEntries
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}