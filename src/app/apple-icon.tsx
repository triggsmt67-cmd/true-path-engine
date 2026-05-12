import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 84,
          background: '#0a0f1c', // brand-navy
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          border: '8px solid #cc2b31', // brand-accent
          borderRadius: '40px', // slight rounded corners for the design
        }}
      >
        <span style={{ position: 'relative', top: '-4px' }}>TP</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
