import { NextResponse } from 'next/server';
// import { NextRequest, NextResponse } from 'next/server';

export async function POST() {
    // export async function POST(request: NextRequest) {
    return NextResponse.json({
        method: 'POST',
        message: 'this was a POST operation'
    });
}
