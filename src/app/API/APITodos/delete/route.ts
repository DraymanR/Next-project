import { NextResponse } from 'next/server';
// import { NextRequest, NextResponse } from 'next/server';

export async function DELETE() {
    // export async function DELETE(request: NextRequest) {
    return NextResponse.json({
        method: 'DELETE',
        message: 'this was a DELETE operation'
    });
}
