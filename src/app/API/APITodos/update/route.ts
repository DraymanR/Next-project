import { NextResponse } from 'next/server';
// import { NextRequest, NextResponse } from 'next/server';

export async function PUT() {
    // export async function DELETE(request: NextRequest) {
    return NextResponse.json({
        method: 'PUT',
        message: 'this was a PUT operation'
    });
}
