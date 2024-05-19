

export default function PanoramicImg() {
  return (
    <div>
              <iframe allow="accelerometer; magnetometer; gyroscope" 
        style={{
          display: 'block',
          // margin: '20px auto',
          border: '0 none',
          maxWidth: '880px',
          borderRadius:'8px', 
          boxShadow: '0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11)',
          }} src="https://panoraven.com/es/embed/aPIafvEzC1"></iframe>
    </div>
  )
}
