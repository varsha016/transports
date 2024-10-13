import { connect } from '@/dbConfig/dbConfig';
import LREntry from '@/models/lrEntryForm';
import { NextResponse } from 'next/server';

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const {
      branch,
      lrNo,
      lrDate,
      vehNo,
      vehType,
      consignorName,
      consigneeName,
      // partyOfDelivery,
      from1,
      from2,
      to1,
      to2,
      modeOfFreight,
      branchOfBilling,
      // octRecdFrom,
      placeOfLoading,
      materialDesc,
      delivery,
      deliveryAt,
      collection,
      placeOfCollection,
      quantity,
      qtyPacking,
      nos,
      nosPacking,
      actualWeight,
      chargedWeight,
      eWayBillNo,
      eWayExpireDate,
      invoiceNo,
      goodsValue,
      ledgerName,
      debit,
      credit,
      // amount,
      // company,
      // details,
      narration,
      lrRemarks,
      rows // Ensure you're destructuring rows from the request body
    } = reqBody;

    // Log the request body for debugging
    console.log(reqBody, 'Request Body');

    // Convert fields to the correct types
    const parsedLRDate = new Date(lrDate);
    const parsedActualWeight = Number(actualWeight);
    const parsedChargedWeight = Number(chargedWeight);
    const parsedGoodsValue = Number(goodsValue);
    // const parsedAmount = amount ? Number(amount) : undefined;

    // Create a new LREntry
    const newLREntry = new LREntry({
      branch,
      lrNo,
      lrDate: parsedLRDate,
      vehNo,
      vehType,
      consignorName,
      consigneeName,
      // partyOfDelivery,
      from1,
      from2,
      to1,
      to2,
      modeOfFreight,
      // octRecdFrom,
      branchOfBilling,
      placeOfLoading,
      materialDesc,
      delivery,
      deliveryAt,
      collection,
      placeOfCollection,
      quantity,
      qtyPacking,
      nos,
      nosPacking,
      actualWeight: parsedActualWeight,
      chargedWeight: parsedChargedWeight,
      eWayBillNo,
      eWayExpireDate,
      invoiceNo,
      goodsValue: parsedGoodsValue,
      ledgerName,
      debit,
      credit,
      // amount: parsedAmount,
      // company,
      // details,
      narration,
      lrRemarks,
      rows // Include rows in the new entry
    });

    // Log the new entry for debugging
    console.log(newLREntry, 'New LREntry');

    // Save the entry to the database
    const savedLREntry = await newLREntry.save();

    // Log the saved entry for debugging
    console.log(savedLREntry, 'Saved LREntry');

    // Return a success response
    return NextResponse.json({
      message: 'LR Entry added successfully',
      success: true,
      data: savedLREntry
    }, { status: 201 });

  } catch (error) {
    // Log and return an error response
    console.error('Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
