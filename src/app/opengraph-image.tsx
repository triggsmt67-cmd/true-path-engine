import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'True Path Digital';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0a0f18, #111a28)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          border: '10px solid #1a2433',
        }}
      >
        {/* Abstract Background Grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.1,
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          {/* Logo / Icon */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 120,
              height: 120,
              borderRadius: 30,
              background: '#0a0f18',
              border: '4px solid #4f7c7a',
              marginBottom: 40,
              boxShadow: '0 0 40px rgba(79, 124, 122, 0.5)',
            }}
          >
            <div
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: '#ffffff',
                fontFamily: 'sans-serif',
                letterSpacing: '-2px',
                display: 'flex',
              }}
            >
              TP
            </div>
          </div>

          {/* Text Content */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#ffffff',
              fontFamily: 'sans-serif',
              letterSpacing: '-2px',
              textAlign: 'center',
              marginBottom: 20,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            True Path <span style={{ color: '#4f7c7a', marginLeft: '16px' }}>Digital</span>
          </div>

          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: '#a0aabf',
              fontFamily: 'sans-serif',
              letterSpacing: '4px',
              textTransform: 'uppercase',
            }}
          >
            No noise. Just signal.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
