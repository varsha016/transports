import { connect } from '@/dbConfig/dbConfig';
import LREntry from '@/models/lrEntryForm';
import { NextResponse } from 'next/server';

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { 
      name,
      lrNo,
      lrDate,
      vehNo,
      consignorName,
      consigneeName,
      modeOfFreight,
      octroiNaka,
      paidBy,
      branchOfBilling,
      octRecdFrom,
      loadingPlace,
      placeOfLoading,
      formNo,
      collectionInfo,
      delivery,
      placeOfDelivery,
      materialDescription,
      quantity,
      quantitySample,
      actualWeight,
      chargedWeight,
      orderBy,
      invoiceNo,
      goodsValue,
      freightChargeType,
      serviceTaxBy,
      rate,
      grossTotal,
      serviceTax,
      educationCess,
      netTotal,
      lrRemarks
    } = reqBody;

    // Log the request body for debugging
    console.log(reqBody, 'Request Body');

    // Convert fields to the correct types
    const parsedLRDate = new Date(lrDate);
    const parsedActualWeight = Number(actualWeight);
    const parsedChargedWeight = Number(chargedWeight);
    const parsedGoodsValue = Number(goodsValue);
    const parsedRate = Number(rate);
    const parsedGrossTotal = Number(grossTotal);
    const parsedServiceTax = serviceTax ? Number(serviceTax) : undefined;
    const parsedEducationCess = educationCess ? Number(educationCess) : undefined;
    const parsedNetTotal = Number(netTotal);

    // Validate required fields
    if (!name || !lrNo || !parsedLRDate || !vehNo ||
        !consignorName || !consigneeName || !loadingPlace || !materialDescription ||
        isNaN(parsedActualWeight) || isNaN(parsedChargedWeight) || isNaN(parsedGoodsValue) ||
        isNaN(parsedRate) || isNaN(parsedGrossTotal) || isNaN(parsedNetTotal)) {
      return NextResponse.json({ error: 'Missing or invalid required fields' }, { status: 400 });
    }

    // Create a new LREntry
    const newLREntry = new LREntry({
      name,
      lrNo,
      lrDate: parsedLRDate,
      vehNo,
      consignorName,
      consigneeName,
      modeOfFreight,
      octroiNaka,
      paidBy,
      branchOfBilling,
      octRecdFrom,
      loadingPlace,
      placeOfLoading,
      formNo,
      collectionInfo,
      delivery,
      placeOfDelivery,
      materialDescription,
      quantity,
      quantitySample,
      actualWeight: parsedActualWeight,
      chargedWeight: parsedChargedWeight,
      orderBy,
      invoiceNo,
      goodsValue: parsedGoodsValue,
      freightChargeType,
      serviceTaxBy,
      rate: parsedRate,
      grossTotal: parsedGrossTotal,
      serviceTax: parsedServiceTax,
      educationCess: parsedEducationCess,
      netTotal: parsedNetTotal,
      lrRemarks
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
