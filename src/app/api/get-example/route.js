// import { NextResponse } from 'next/server';
// import { get } from '@vercel/edge-config';
 
// export const runtime = 'edge';
 
// export async function GET() {
//   const exampleValue1 = await get('greeting');
//   return NextResponse.json({
//     label: `Value of "greeting" in my Edge Config.`,
//     value: exampleValue1,
//   });
// }

import { NextResponse } from 'next/server';
import { has } from '@vercel/edge-config';
 
// export const runtime = 'edge';
 
export async function GET() {
  const exampleKeyExists = await has('greeting');
  return NextResponse.json({
    keyExists: exampleKeyExists ? `The key exists!` : `The key doesn't exist!`,
  });
}