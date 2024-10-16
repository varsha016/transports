



import { connect } from '@/dbConfig/dbConfig';
import Memo from '@/models/memoModel'; // Assuming you have a Memo model
import { NextResponse } from 'next/server';

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();

    // Log the request body for debugging
    console.log('Request Body:', reqBody);

    // Destructure and validate data
    const {
      memoNo,
      date,
      vehicleType,
      type,
      vehicleNo,
      from,
      to,
      vehicleOwner,
      telephoneNo,
      driverName,
      drivingLicNo,
      engineNo,
      chassisNo,
      octroiAgent,
      selfLRs,
      total,
      paidLRs,
      toPayLRs,
      branch,
      party,
      toBeBilledLRs,
      totalLRs,
      advancePaidDate,
      amount,
      payableAt,
      advanceThrough,
      remark,
      advance,
      narration
    } = reqBody;

    if (!memoNo || !date || !vehicleType) {
      // Return a 400 error if required fields are missing
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create and save the new Memo entry
    const newMemo = new Memo({
      memoNo,
      date: new Date(date),
      vehicleType,
      type,
      vehicleNo,
      from,
      to,
      vehicleOwner,
      telephoneNo,
      driverName,
      drivingLicNo,
      engineNo,
      chassisNo,
      octroiAgent,
      selfLRs,
      // total: Number(total),
      // paidLRs: Number(paidLRs),
      // toPayLRs: Number(toPayLRs),
      // branch,
      // party,
      // toBeBilledLRs: Number(toBeBilledLRs),
      // totalLRs: Number(totalLRs),
      advancePaidDate: advancePaidDate ? new Date(advancePaidDate) : undefined,
      amount: Number(amount),
      payableAt,
      advanceThrough,
      remark,
      advance: Number(advance),
      narration
    });

    const savedMemo = await newMemo.save();

    return NextResponse.json({
      message: 'Memo added successfully',
      success: true,
      data: savedMemo
    }, { status: 200 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
