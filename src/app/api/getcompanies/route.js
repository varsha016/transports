import { connect } from '@/dbConfig/dbConfig'; // Adjust the path if necessary
import Company from '@/models/companies'; // Adjust the path if necessary
import { NextResponse } from 'next/server';

// Ensure MongoDB connection is established
connect();
console.log('Connect function called');

export async function GET(request) {
  try {
    // Fetch all company documents from the database
    const companies = await Company.find({});

    // Check if any companies were found
    if (companies.length === 0) {
      return NextResponse.json({ message: 'No companies found' }, { status: 404 });
    }

    // Return the fetched companies with a 200 status code
    return NextResponse.json(companies, { status: 200 });

  } catch (error) {
    console.error('Error fetching companies:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
