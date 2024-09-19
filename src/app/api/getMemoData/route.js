// src/app/api/getMemoData/route.js
import { connect } from '@/dbConfig/dbConfig'; 

import { NextResponse } from 'next/server';
import Memo from '@/models/memoModel';

connect(); 

 
export async function GET() {
  try {
    const memos = await Memo.find();
    return NextResponse.json({ success: true, memos });
  } catch (error) {
    console.error('Error fetching memos:', error);
    return NextResponse.json({ success: false, message: 'Failed to fetch memos' }, { status: 500 });
  }
}
