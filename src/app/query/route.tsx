import { getPlaceholderWord } from '@/lib/getWord';
import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const purpose = searchParams.get('purpose');
  if (purpose === null) {
    return NextResponse.json({ error: 'purpose parameter is required' });
  }

  let retryCount = 0;
  while (retryCount < 3) {
    const output = await getPlaceholderWord({ purpose });
    if (output === undefined) {
      retryCount += 1;
      continue;
    }

    return NextResponse.json({ output });
  }

  return NextResponse.json({ error: 'internal server error' });
};
