import { connect } from '@/dbConfig/dbConfig'; // Adjust the path if necessary
import UserType from '@/models/usertype'; // Adjust the path if necessary
import { NextResponse } from 'next/server';

// Ensure MongoDB connection is established
connect();
console.log('Connect function called');

export async function GET(request) {
  try {
    // Fetch all user types from the database
    const userTypes = await UserType.find({});

    // Check if any user types were found
    if (userTypes.length === 0) {
      return NextResponse.json({ message: 'No user types found' }, { status: 404 });
    }

    // Return the fetched user types with a 200 status code
    return NextResponse.json(userTypes, { status: 200 });

  } catch (error) {
    console.error('Error fetching user types:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
