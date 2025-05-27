import { NextResponse } from 'next/server';

export async function GET() {
  const sha256Cert = process.env.SHA256_CERT;
  const androidPackage = process.env.ANDROID_PACKAGE;

  // Optional: Basic validation to avoid serving malformed responses
  if (!sha256Cert || !androidPackage) {
    return NextResponse.json(
      { error: 'Missing SHA256_CERT or ANDROID_PACKAGE in environment variables.' },
      { status: 500 }
    );
  }

  const assetLinks = [
    {
      relation: ['delegate_permission/common.handle_all_urls'],
      target: {
        namespace: 'android_app',
        package_name: androidPackage,
        sha256_cert_fingerprints: [sha256Cert],
      },
    },
  ];

  return NextResponse.json(assetLinks, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600', // Optional caching
    },
  });
}
