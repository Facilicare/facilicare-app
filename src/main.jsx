import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Clock, Brain, Phone, Heart, ArrowLeft, CheckCircle, Star } from 'lucide-react'

const FaciliCareApp = () => {
  const [currentView, setCurrentView] = useState('homepage')
  const [formData, setFormData] = useState({
    shiftType: '',
    county: '',
    startDate: 'This week'
  })
  const [loading, setLoading] = useState(false)

  const counties = ['Miami-Dade County', 'Broward County', 'Palm Beach County']
  const careTypes = [
    { id: 'hourly', label: 'Hourly Care', icon: '⏰', desc: 'Flexible daily support' },
    { id: 'livein', label: 'Live-in Care', icon: '🏠', desc: '24/7 comprehensive care' },
    { id: 'weekend', label: 'Weekend Care', icon: '📅', desc: 'Weekend-only support' }
  ]

  const mockAides = [
    { name: 'Maria K.', match: 98, experience: '4 years', specialties: 'Alzheimer\'s, Diabetes', rating: 4.9 },
    { name: 'Jennifer S.', match: 95, experience: '6 years', specialties: 'Post-surgical, Mobility', rating: 4.8 },
    { name: 'Carmen R.', match: 92, experience: '3 years', specialties: 'Companionship, Housekeeping', rating: 4.7 }
  ]

  const handleQuickMatch = () => {
    if (!formData.shiftType || !formData.county) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setCurrentView('results')
    }, 2000)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f3f4f6, #ffffff)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>AI Matching in Progress...</h2>
          <p style={{ color: '#7F73E3' }}>Analyzing 200+ caregivers in your area</p>
        </div>
      </div>
    )
  }

  if (currentView === 'results') {
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f3f4f6, #ffffff)' }}>
        <header style={{ background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={() => setCurrentView('homepage')} style={{ display: 'flex', alignItems: 'center', color: '#7F73E3', background: 'none', border: 'none', cursor: 'pointer' }}>
              <ArrowLeft style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              Back to Search
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Heart style={{ width: '32px', height: '32px', color: '#7F73E3' }} />
              <div>
                <h1 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>FaciliCare</h1>
                <p style={{ fontSize: '12px', color: '#7F73E3', margin: 0 }}>Quality Care at Home</p>
              </div>
            </div>
            <button style={{ background: '#7F73E3', color: 'white', padding: '8px 16px', borderRadius: '8px', border: 'none', fontWeight: '500' }}>
              Call (845) 304-2452
            </button>
          </div>
        </header>

        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 16px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>
              Found 3 Perfect Matches for You!
            </h1>
            <p style={{ color: '#7F73E3', marginBottom: '16px' }}>AI analyzed 47 factors to find your ideal caregivers in {formData.county}</p>
            <div style={{ display: 'inline-flex', alignItems: 'center', background: '#f0fdf4', color: '#166534', padding: '8px 16px', borderRadius: '20px' }}>
              <CheckCircle style={{ width: '16px', height: '16px', marginRight: '8px' }} />
              All caregivers available {formData.startDate.toLowerCase()}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {mockAides.map((aide, index) => (
              <div key={index} style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #d8b4fe, #c084fc)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                      👩‍⚕️
                    </div>
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: '0 0 4px 0' }}>{aide.name}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '14px', color: '#7F73E3' }}>
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                          <Star style={{ width: '16px', height: '16px', color: '#fbbf24', marginRight: '4px' }} />
                          {aide.rating}
                        </span>
                        <span>{aide.experience} experience</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', color: '#166534', padding: '4px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
                      {aide.match}% Match
                    </div>
                    <p style={{ fontSize: '12px', color: '#9ca3af', margin: '4px 0 0 0' }}>AI Confidence</p>
                  </div>
                </div>
                
                <div style={{ marginBottom: '24px' }}>
                  <p style={{ color: '#374151', marginBottom: '8px' }}>
                    <strong>Specialties:</strong> {aide.specialties}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button 
                    onClick={() => alert('Interview request sent! We\'ll call you within 30 minutes to coordinate.')}
                    style={{ flex: 1, background: 'linear-gradient(135deg, #7F73E3, #9B8CE8)', color: 'white', padding: '12px 16px', borderRadius: '8px', border: 'none', fontWeight: '500', cursor: 'pointer' }}
                  >
                    Request Interview
                  </button>
                  <button 
                    onClick={() => alert('Call (845) 304-2452 for personalized pricing based on your specific needs.')}
                    style={{ padding: '12px 16px', border: '2px solid #7F73E3', color: '#7F73E3', borderRadius: '8px', background: 'white', fontWeight: '500', cursor: 'pointer' }}
                  >
                    Get Pricing
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)', borderRadius: '12px', padding: '32px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>Want Even Better Matches?</h3>
            <p style={{ color: '#7F73E3', marginBottom: '24px' }}>Complete our comprehensive assessment for 99%+ matching accuracy</p>
            <button 
              onClick={() => alert('Full assessment coming soon! Call (845) 304-2452 to speak with a care coordinator.')}
              style={{ background: 'white', color: '#7F73E3', padding: '16px 32px', borderRadius: '8px', fontWeight: 'bold', border: '2px solid #7F73E3', marginRight: '16px', cursor: 'pointer' }}
            >
              Complete Full Assessment
            </button>
            <button 
              onClick={() => alert('Calling you now! Please have your phone ready.')}
              style={{ background: 'linear-gradient(135deg, #7F73E3, #9B8CE8)', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
            >
              Call Me Instead
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f3f4f6, #ffffff)' }}>
      <header style={{ background: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '16px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Heart style={{ width: '40px', height: '40px', color: '#7F73E3' }} />
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>FaciliCare</h1>
              <p style={{ fontSize: '14px', color: '#7F73E3', margin: 0 }}>Quality Care at Home</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button style={{ color: '#7F73E3', fontWeight: '500', background: 'none', border: 'none', cursor: 'pointer' }}>
              Apply as Caregiver
            </button>
            <button style={{ 
              background: 'linear-gradient(135deg, #7F73E3, #9B8CE8)', 
              color: 'white', 
              padding: '8px 16px', 
              borderRadius: '8px', 
              border: 'none', 
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }}>
              <Phone style={{ width: '16px', height: '16px' }} />
              (845) 304-2452
            </button>
          </div>
        </div>
      </header>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 16px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '64px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px', lineHeight: '1.1' }}>
            Find Care in Minutes, Not Days
          </h1>
          <p style={{ fontSize: '20px', color: '#7F73E3', marginBottom: '32px', maxWidth: '800px', margin: '0 auto 32px auto' }}>
            AI-powered matching connects you with thoroughly vetted CNA and HHA caregivers instantly
          </p>
        </div>

        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', borderRadius: '16px', boxShadow: '0 20px 25px rgba(0,0,0,0.1)', padding: '32px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', marginBottom: '24px' }}>
            Get matched with your perfect caregiver in 60 seconds
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '12px' }}>
                What type of care do you need?
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                {careTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleInputChange('shiftType', type.id)}
                    style={{
                      padding: '16px',
                      borderRadius: '12px',
                      border: formData.shiftType === type.id ? '2px solid #7F73E3' : '2px solid #e5e7eb',
                      background: formData.shiftType === type.id ? '#f3f4f6' : 'white',
                      cursor: 'pointer',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: '32px', marginBottom: '8px' }}>{type.icon}</div>
                    <div style={{ fontWeight: '600', color: '#1f2937', marginBottom: '4px' }}>{type.label}</div>
                    <div style={{ fontSize: '14px', color: '#6b7280' }}>{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '12px' }}>
                Where in Florida?
              </label>
              <select
                value={formData.county}
                onChange={(e) => handleInputChange('county', e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '16px',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="">Select your county</option>
                {counties.map((county) => (
                  <option key={county} value={county}>{county}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleQuickMatch}
              disabled={!formData.shiftType || !formData.county}
              style={{
                width: '100%',
                padding: '16px 24px',
                borderRadius: '12px',
                fontWeight: 'bold',
                fontSize: '18px',
                border: 'none',
                cursor: formData.shiftType && formData.county ? 'pointer' : 'not-allowed',
                background: formData.shiftType && formData.county 
                  ? 'linear-gradient(135deg, #7F73E3, #9B8CE8)' 
                  : '#e5e7eb',
                color: formData.shiftType && formData.county ? 'white' : '#9ca3af',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Brain style={{ width: '20px', height: '20px' }} />
              Find My Perfect Match
            </button>
            
            <p style={{ textAlign: 'center', fontSize: '14px', color: '#9ca3af' }}>
              Average match time: 47 seconds
            </p>
          </div>
        </div>
      </section>
      <section style={{ background: 'linear-gradient(135deg, #7F73E3, #9B8CE8)', padding: '64px 16px', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '32px' }}>Why Families Choose FaciliCare</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', backdropFilter: 'blur(4px)' }}>
              <Brain style={{ width: '48px', height: '48px', margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Advanced AI Matching</h3>
              <p>47+ factors analyzed for perfect compatibility</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', backdropFilter: 'blur(4px)' }}>
              <Clock style={{ width: '48px', height: '48px', margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Lightning Fast</h3>
              <p>Get matched with qualified CNA/HHA caregivers in minutes</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', backdropFilter: 'blur(4px)' }}>
              <Phone style={{ width: '48px', height: '48px', margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>24/7 Personal Support</h3>
              <p>Dedicated care coordinators guide your journey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<FaciliCareApp />)
