import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center', 
      fontFamily: 'system-ui, sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f3f4f6, #ffffff)'
    }}>
      <h1 style={{ 
        color: '#7F73E3', 
        fontSize: '48px', 
        marginBottom: '16px',
        fontWeight: 'bold'
      }}>
        FaciliCare
      </h1>
      <p style={{ 
        fontSize: '20px', 
        color: '#666',
        marginBottom: '24px'
      }}>
        Quality Care at Home
      </p>
      <p style={{ fontSize: '18px', color: '#333' }}>
        Your AI-powered healthcare matching platform
      </p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
