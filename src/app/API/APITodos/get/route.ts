import { NextResponse } from 'next/server';
// import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    // export async function DELETE(request: NextRequest) {
    return NextResponse.json({
        method: 'GET',
        message: 'this was a GET operation'
    });
}
