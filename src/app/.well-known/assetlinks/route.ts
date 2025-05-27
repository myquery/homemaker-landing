import { NextResponse } from 'next/server';

export async function GET() {
  const sha = process.env.SHA256_CERT;
  const packageName = process.env.ANDROID_PACKAGE;

  const data = [
    {
      relation: ['delegate_permission/common.handle_all_urls'],
      target: {
        namespace: 'android_app',
        package_name: packageName,
        sha256_cert_fingerprints: [sha],
      },
    },
  ];

  return NextResponse.json(data);
}
