import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'GSMotorsinc — Quality Used Cars in Newcastle, ON';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1526 50%, #0a0f1e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Red accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: 'linear-gradient(90deg, #dc2626, #ef4444)',
          }}
        />
        {/* Logo text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: '#dc2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            G
          </div>
          <span style={{ color: 'white', fontSize: 42, fontWeight: 900, letterSpacing: -1 }}>
            GSMotorsinc
          </span>
        </div>
        <div
          style={{
            color: '#dc2626',
            fontSize: 20,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          Premium Pre-Owned Vehicles
        </div>
        <div
          style={{
            color: '#9ca3af',
            fontSize: 22,
            textAlign: 'center',
            maxWidth: 700,
          }}
        >
          Quality used cars in Newcastle, ON — serving Durham Region &amp; the GTA
        </div>
        {/* Bottom address */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            color: '#4b5563',
            fontSize: 16,
          }}
        >
          3400 ON-115, Newcastle, ON · 647-801-2475 · gsmotorsinc.com
        </div>
      </div>
    ),
    { ...size }
  );
}
