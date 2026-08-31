import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'ISO 9001 Certification Malaysia - AA Alive Sdn Bhd'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0c4a6e 0%, #0284c7 50%, #0ea5e9 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                background: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 800,
                color: '#0284c7',
              }}
            >
              ISO
            </div>
            <div
              style={{
                fontSize: '48px',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.1,
              }}
            >
              ISO 9001
            </div>
          </div>
          <div
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.3,
            }}
          >
            Quality Management Certification
          </div>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 600,
              color: '#bae6fd',
              textAlign: 'center',
              lineHeight: 1.3,
            }}
          >
            {"Malaysia's Trusted ISO Consultant Since 2016"}
          </div>
          <div
            style={{
              display: 'flex',
              gap: '40px',
              marginTop: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
              }}
            >
              <span style={{ fontSize: '36px', fontWeight: 800 }}>2016</span>
              <span style={{ fontSize: '16px', color: '#bae6fd' }}>Since</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
              }}
            >
              <span style={{ fontSize: '36px', fontWeight: 800 }}>RM13k</span>
              <span style={{ fontSize: '16px', color: '#bae6fd' }}>From</span>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
              }}
            >
              <span style={{ fontSize: '36px', fontWeight: 800 }}>MY</span>
              <span style={{ fontSize: '16px', color: '#bae6fd' }}>Nationwide</span>
            </div>
          </div>
          <div
            style={{
              marginTop: '20px',
              fontSize: '18px',
              color: '#e0f2fe',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            AA Alive Sdn Bhd | isoconsultantmalaysia.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
