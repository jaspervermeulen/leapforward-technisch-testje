import { NextResponse } from 'next/server';

const EXTERNAL_API = 'https://lab.lfwd.be/dev-test/quiz_data.json';

export async function GET() {
  try {
    const res = await fetch(EXTERNAL_API, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch questions' },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong', details: (error as Error).message },
      { status: 500 }
    );
  }
}
