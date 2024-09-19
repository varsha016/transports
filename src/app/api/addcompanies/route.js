import { connect } from '@/dbConfig/dbConfig'; // Adjust the path if necessary
import Company from '@/models/companies'; // Adjust the path if necessary
import { NextResponse } from 'next/server';

// Ensure MongoDB connection is established
connect();
console.log('Connect function called');

export async function POST(request) {
  try {
    // Parse JSON body from the request
    const reqBody = await request.json();
    const { name, address,id } = reqBody;
    console.log(reqBody);

    // Check if a company with the given name already exists
    const existingCompany = await Company.findOne({ id });
    if (existingCompany) {
      return NextResponse.json({ error: 'Company already exists' }, { status: 400 });
    }

    // Create a new company document
    const newCompany = new Company({
      name,
      address,
      id
    });

    // Save the new company document to the database
    const savedCompany = await newCompany.save();
    console.log(savedCompany, 'savedCompany');

    return NextResponse.json({
      message: 'Company registered successfully',
      success: true,
      savedCompany
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
