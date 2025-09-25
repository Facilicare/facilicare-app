import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // This line is crucial
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
const FaciliCareApp = () => {
  const [currentView, setCurrentView] = useState('homepage');
  const [formData, setFormData] = useState({
    shiftType: '',
    county: '',
    startDate: 'This week',
    clientContact: { name: '', phone: '', email: '' },
    clientName: '',
    dateOfBirth: '',
    homeAddress: '',
    paymentMethod: '',
    leadSource: '',
    leadSourceOther: '',
    shiftsNeeded: [],
    daysNeeded: [],
    startTime: '',
    endTime: '',
    actualStartDate: '',
    endDate: '',
    transportation: [],
    languages: [],
    languagesOther: '',
    additionalComments: '',
    cognitiveConditions: [],
    mobilityPhysical: [],
    chronicIllnesses: [],
    sensoryImpairments: [],
    mentalHealth: [],
    personalCare: [],
    householdCare: [],
    mobilityTransfers: [],
    healthMedical: [],
    palliativeCare: [],
    otherSpecialized: [],
    additionalCareComments: '',
    emergencyContact: { name: '', phone: '', relationship: '' },
    preferredContactMethod: ''
  });

  const [loading, setLoading] = useState(false);

  const counties = ['Miami-Dade County', 'Broward County', 'Palm Beach County'];

  const careTypes = [
    { id: 'hourly', label: 'Hourly Care', icon: '⏰', desc: 'Flexible daily support' },
    { id: 'livein', label: 'Live-in Care', icon: '🏠', desc: '24/7 comprehensive care' },
    { id: 'weekend', label: 'Weekend Care', icon: '📅', desc: 'Weekend-only support' }
  ];

  const careNeeds = {
    cognitive: [
      'Alzheimer\'s Disease', 'Dementia', 'Parkinson\'s Disease', 'Stroke Recovery', 'Traumatic Brain Injury'
    ],
    mobility: [
      'Paralysis', 'Arthritis', 'Multiple Sclerosis', 'ALS (Lou Gehrig\'s Disease)', 
      'Osteoporosis & Fall Risk', 'Amputee Care', 'Post-Surgical Recovery'
    ],
    chronic: [
      'Diabetes (Type 1)', 'Diabetes (Type 2)', 'Hypertension (High Blood Pressure)', 
      'Congestive Heart Failure', 'Chronic Obstructive Pulmonary Disease', 
      'Kidney Disease/Dialysis Patients', 'Cancer Care'
    ],
    sensory: ['Vision Impairment/Blindness', 'Hearing Impairment/Deafness'],
    mentalHealth: ['Depression', 'Anxiety Disorders', 'Schizophrenia', 'Bipolar Disorder'],
    personalCare: ['Bathing/Dressing', 'Toileting/Incontinence Care'],
    household: [
      'Meal Preparation & Feeding Assistance', 
      'Light Housekeeping (Laundry, Dishes, Organizing)', 
      'Companionship & Emotional Support', 
      'Experience with Kosher Dietary Restrictions'
    ],
    mobilitySupport: [
      'Transferring (Bed to Chair, etc.)', 'Using Hoyer Lift or Transfer Equipment',
      'Assisting with Walking (Fall Prevention)', 'Lifting & Moving Patients'
    ],
    medical: [
      'Medication Reminders', 'Medication Administration', 'Blood Sugar Monitoring',
      'Blood Pressure Monitoring', 'Catheter & Ostomy Care', 'Feeding Tube Assistance'
    ],
    palliative: ['Hospice Care', 'Bedbound Care & Repositioning', 'Pain Management Assistance'],
    specialized: ['Tracheostomy Care', 'Ventilator-Dependent Care']
  };

  const mockAides = [
    { name: 'Maria K.', match: 98, experience: '4 years', specialties: 'Alzheimer\'s, Diabetes', rating: 4.9, available: true },
    { name: 'Jennifer S.', match: 95, experience: '6 years', specialties: 'Post-surgical, Mobility', rating: 4.8, available: true },
    { name: 'Carmen R.', match: 92, experience: '3 years', specialties: 'Companionship, Housekeeping', rating: 4.7, available: true }
  ];

  const handleQuickMatch = () => {
    if (!formData.shiftType || !formData.county) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCurrentView('results');
    }, 2000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNestedInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-6 relative">
            <div className="absolute inset-0 rounded-full border-4 border-purple-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-purple-600 border-t-transparent animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold text-purple-900 mb-2">AI Matching in Progress...</h2>
          <p className="text-purple-600">Analyzing 200+ caregivers in your area</p>
          <div className="mt-4 space-y-2 text-sm text-purple-500">
            <p className="opacity-100">✓ Reviewing experience levels</p>
            <p className="opacity-75">✓ Matching care specialties</p>
            <p className="opacity-50">✓ Checking availability</p>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
        <header className="bg-white shadow-sm px-4 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button onClick={() => setCurrentView('homepage')} className="flex items-center text-purple-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Search
            </button>
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8 text-purple-600" />
              <div>
                <h1 className="text-lg font-bold text-purple-900">FaciliCare</h1>
                <p className="text-xs text-purple-600">Quality Care at Home</p>
              </div>
            </div>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium">
              Call (845) 304-2452
            </button>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-purple-900 mb-2">
              Found 3 Perfect Matches for You!
            </h1>
            <p className="text-purple-600">AI analyzed 47 factors to find your ideal caregivers in {formData.county}</p>
            <div className="mt-4 inline-flex items-center bg-green-50 text-green-800 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 mr-2" />
              All caregivers available {formData.startDate.toLowerCase()}
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {mockAides.map((aide, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full flex items-center justify-center text-2xl">
                      👩‍⚕️
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-900">{aide.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-purple-600">
                        <span className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 mr-1 fill-current" />
                          {aide.rating}
                        </span>
                        <span>{aide.experience} experience</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                          Available Now
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                      {aide.match}% Match
                    </div>
                    <p className="text-xs text-purple-500 mt-1">AI Confidence</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-purple-700 mb-2">
                    <strong>Specialties:</strong> {aide.specialties}
                  </p>
                  <p className="text-purple-600 text-sm">
                    Experienced with {formData.shiftType} care • Available in {formData.county}
                  </p>
                </div>

                <div className="flex space-x-3">
                  <button 
                    onClick={() => alert('Interview request sent! We\'ll call you within 30 minutes to coordinate.')}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition shadow-lg"
                  >
                    Request Interview
                  </button>
                  <button 
                    onClick={() => alert('Pricing starts at competitive rates. Call (845) 304-2452 for personalized quote based on your specific needs.')}
                    className="px-4 py-3 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition"
                  >
                    Get Pricing
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-purple-900 mb-2">
              Want Even Better Matches?
            </h3>
            <p className="text-purple-600 mb-6">
              Complete our comprehensive assessment to find your perfect caregiver with 99%+ accuracy
            </p>
            <button 
              onClick={() => setCurrentView('fullAssessment')}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold border-2 border-purple-600 hover:bg-purple-50 transition shadow-lg mr-4"
            >
              Complete Full Assessment
            </button>
            <button 
              onClick={() => alert('Calling you now! Please have your phone ready.')}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg font-bold hover:from-purple-700 hover:to-purple-800 transition shadow-lg"
            >
              Call Me Instead
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'fullAssessment') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
        <header className="bg-white shadow-sm px-4 py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <button onClick={() => setCurrentView('results')} className="flex items-center text-purple-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Results
            </button>
            <div className="flex items-center space-x-3">
              <Heart className="w-8 h-8 text-purple-600" />
              <div>
                <h1 className="text-lg font-bold text-purple-900">FaciliCare</h1>
                <p className="text-xs text-purple-600">Quality Care at Home</p>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-purple-900 mb-2">
              Complete Care Assessment
            </h1>
            <p className="text-purple-600">Help us find your perfect caregiver with our comprehensive matching system</p>
            <div className="mt-4 bg-purple-100 rounded-full px-4 py-2 inline-block">
              <span className="text-purple-800 font-medium">Takes 5 minutes • 99%+ matching accuracy</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-purple-900 mb-4">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.clientContact.name}
                    onChange={(e) => handleNestedInputChange('clientContact', 'name', e.target.value)}
                    className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                    placeholder="First and Last Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.clientContact.phone}
                    onChange={(e) => handleNestedInputChange('clientContact', 'phone', e.target.value)}
                    className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.clientContact.email}
                    onChange={(e) => handleNestedInputChange('clientContact', 'email', e.target.value)}
                    className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Care Recipient Name</label>
                  <input
                    type="text"
                    value={formData.clientName}
                    onChange={(e) => handleInputChange('clientName', e.target.value)}
                    className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                    placeholder="If different from above"
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-900 mb-4">Care Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Care Recipient Date of Birth</label>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Home Address</label>
                  <input
                    type="text"
                    value={formData.homeAddress}
                    onChange={(e) => handleInputChange('homeAddress', e.target.value)}
                    className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                    placeholder="Full address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">How will you pay for services?</label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                    className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                  >
                    <option value="">Select payment method</option>
                    <option value="Long-Term Care Insurance">Long-Term Care Insurance</option>
                    <option value="Private Pay">Private Pay</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">How did you hear about us?</label>
                  <select
                    value={formData.leadSource}
                    onChange={(e) => handleInputChange('leadSource', e.target.value)}
                    className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                  >
                    <option value="">Select source</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Referral">Referral</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-900 mb-4">Care Schedule</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Shifts Needed</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {['Live-in Shifts', 'Hourly Shifts', 'Weekend Shifts'].map((shift) => (
                      <label key={shift} className="flex items-center p-3 border border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.shiftsNeeded.includes(shift)}
                          onChange={() => handleCheckboxChange('shiftsNeeded', shift)}
                          className="text-purple-600 mr-3"
                        />
                        {shift}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Days of Week</label>
                  <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                    {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                      <label key={day} className="flex items-center p-2 border border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer text-sm">
                        <input
                          type="checkbox"
                          checked={formData.daysNeeded.includes(day)}
                          onChange={() => handleCheckboxChange('daysNeeded', day)}
                          className="text-purple-600 mr-2"
                        />
                        {day.slice(0, 3)}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">Shift Start Time</label>
                    <input
                      type="time"
                      value={formData.startTime}
                      onChange={(e) => handleInputChange('startTime', e.target.value)}
                      className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">Shift End Time</label>
                    <input
                      type="time"
                      value={formData.endTime}
                      onChange={(e) => handleInputChange('endTime', e.target.value)}
                      className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">Care Start Date</label>
                    <input
                      type="date"
                      value={formData.actualStartDate}
                      onChange={(e) => handleInputChange('actualStartDate', e.target.value)}
                      className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-purple-700 mb-2">Care End Date (Optional)</label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                      className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Transportation Needs</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Aide should be able to run errands for client', 'Aide should be able to drive clients to appointments', 'Car provided for aide'].map((transport) => (
                      <label key={transport} className="flex items-center p-3 border border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.transportation.includes(transport)}
                          onChange={() => handleCheckboxChange('transportation', transport)}
                          className="text-purple-600 mr-3"
                        />
                        <span className="text-sm">{transport}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Language Preferences</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['English', 'Spanish'].map((language) => (
                      <label key={language} className="flex items-center p-3 border border-purple-200 rounded-lg hover:bg-purple-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.languages.includes(language)}
                          onChange={() => handleCheckboxChange('languages', language)}
                          className="text-purple-600 mr-3"
                        />
                        <span className="text-sm">{language}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Additional Comments</label>
                  <textarea
                    value={formData.additionalComments}
                    onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                    className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                    rows="3"
                    placeholder="Any other information about your care needs..."
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-900 mb-4">Preferred Caregiver Experience</h2>
              <p className="text-purple-600 mb-6">Select the areas where you'd prefer your caregiver to have experience:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-purple-800 mb-3">Cognitive & Neurological Care Experience</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {careNeeds.cognitive.map((condition) => (
                      <label key={condition} className="flex items-center p-2 hover:bg-purple-50 rounded cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.cognitiveConditions.includes(condition)}
                          onChange={() => handleCheckboxChange('cognitiveConditions', condition)}
                          className="text-purple-600 mr-3"
                        />
                        <span className="text-sm">{condition}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-800 mb-3">Mobility & Physical Care Experience</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {careNeeds.mobility.map((condition) => (
                      <label key={condition} className="flex items-center p-2 hover:bg-purple-50 rounded cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.mobilityPhysical.includes(condition)}
                          onChange={() => handleCheckboxChange('mobilityPhysical', condition)}
                          className="text-purple-600 mr-3"
                        />
                        <span className="text-sm">{condition}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-800 mb-3">Chronic Illness Care Experience</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {careNeeds.chronic.map((condition) => (
                      <label key={condition} className="flex items-center p-2 hover:bg-purple-50 rounded cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.chronicIllnesses.includes(condition)}
                          onChange={() => handleCheckboxChange('chronicIllnesses', condition)}
                          className="text-purple-600 mr-3"
                        />
                        <span className="text-sm">{condition}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-800 mb-3">Personal Care Experience</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {careNeeds.personalCare.map((task) => (
                      <label key={task} className="flex items-center p-2 hover:bg-purple-50 rounded cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.personalCare.includes(task)}
                          onChange={() => handleCheckboxChange('personalCare', task)}
                          className="text-purple-600 mr-3"
                        />
                        <span className="text-sm">{task}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-800 mb-3">Household & Companion Care Experience</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {careNeeds.household.map((task) => (
                      <label key={task} className="flex items-center p-2 hover:bg-purple-50 rounded cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.householdCare.includes(task)}
                          onChange={() => handleCheckboxChange('householdCare', task)}
                          className="text-purple-600 mr-3"
                        />
                        <span className="text-sm">{task}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-800 mb-3">Health & Medical Support Experience</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {careNeeds.medical.map((task) => (
                      <label key={task} className="flex items-center p-2 hover:bg-purple-50 rounded cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.healthMedical.includes(task)}
                          onChange={() => handleCheckboxChange('healthMedical', task)}
                          className="text-purple-600 mr-3"
                        />
                        <span className="text-sm">{task}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-purple-800 mb-3">Additional Care Preferences</h3>
                  <textarea
                    value={formData.additionalCareComments}
                    onChange={(e) => handleInputChange('additionalCareComments', e.target.value)}
                    className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                    rows="3"
                    placeholder="Any other specific experience you'd prefer your caregiver to have..."
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-purple-900 mb-4">Emergency Contact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.emergencyContact.name}
                    onChange={(e) => handleNestedInputChange('emergencyContact', 'name', e.target.value)}
                    className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.emergencyContact.phone}
                    onChange={(e) => handleNestedInputChange('emergencyContact', 'phone', e.target.value)}
                    className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">Relationship</label>
                  <input
                    type="text"
                    value={formData.emergencyContact.relationship}
                    onChange={(e) => handleNestedInputChange('emergencyContact', 'relationship', e.target.value)}
                    className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                    placeholder="Son, Daughter, etc."
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label className="block text-sm font-medium text-purple-700 mb-2">Preferred Contact Method</label>
                <select
                  value={formData.preferredContactMethod}
                  onChange={(e) => handleInputChange('preferredContactMethod', e.target.value)}
                  className="w-full p-3 border border-purple-200 rounded-lg focus:border-purple-600 focus:outline-none"
                >
                  <option value="">Select preferred method</option>
                  <option value="Phone">Phone Call</option>
                  <option value="Text">Text Message</option>
                  <option value="Email">Email</option>
                </select>
              </div>
            </section>

            <div className="text-center pt-8">
              <button 
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    alert('Assessment complete! We\'ll call you within 30 minutes with your perfect caregiver matches.');
                    setCurrentView('results');
                  }, 3000);
                }}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-12 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition shadow-xl"
              >
                <Brain className="w-5 h-5 inline mr-2" />
                Find My Perfect Match
              </button>
              <p className="text-purple-500 text-sm mt-4">
                Our team will review your assessment and call you with personalized matches
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <header className="bg-white shadow-sm px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Heart className="w-10 h-10 text-purple-600" />
            <div>
              <h1 className="text-xl font-bold text-purple-900">FaciliCare</h1>
              <p className="text-sm text-purple-600">Quality Care at Home</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-purple-600 font-medium hover:text-purple-700 transition">
              Apply as Caregiver
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition shadow-lg">
              <Phone className="w-4 h-4 inline mr-2" />
              (845) 304-2452
            </button>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-900 mb-4 leading-tight">
            Find Care in Minutes,<br />Not Days
          </h1>
          <p className="text-xl text-purple-600 mb-8 max-w-3xl mx-auto">
            AI-powered matching connects you with thoroughly vetted CNA and HHA caregivers instantly
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2 text-purple-700 bg-white px-4 py-2 rounded-full shadow-md">
              <Brain className="w-5 h-5" />
              <span className="font-medium">AI-powered matching</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-700 bg-white px-4 py-2 rounded-full shadow-md">
              <Clock className="w-5 h-5" />
              <span className="font-medium">Matched in under 2 minutes</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-700 bg-white px-4 py-2 rounded-full shadow-md">
              <Phone className="w-5 h-5" />
              <span className="font-medium">Personal care coordinators</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 border border-purple-100">
          <h2 className="text-2xl font-bold text-purple-900 text-center mb-6">
            Get matched with your perfect caregiver in 60 seconds
          </h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-purple-900 mb-3">
                What type of care do you need?
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {careTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleInputChange('shiftType', type.id)}
                    className={`p-4 rounded-xl border-2 transition transform hover:scale-105 ${
                      formData.shiftType === type.id
                        ? 'border-purple-600 bg-purple-50 shadow-lg'
                        : 'border-purple-200 hover:border-purple-300 hover:shadow-md'
                    }`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="font-semibold text-purple-900">{type.label}</div>
                    <div className="text-sm text-purple-600">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold text-purple-900 mb-3">
                Where in Florida?
              </label>
              <select
                value={formData.county}
                onChange={(e) => handleInputChange('county', e.target.value)}
                className="w-full p-4 border-2 border-purple-200 rounded-xl focus:border-purple-600 focus:outline-none text-lg"
              >
                <option value="">Select your county</option>
                {counties.map((county) => (
                  <option key={county} value={county}>{county}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-purple-900 mb-3">
                When do you need care?
              </label>
              <div className="grid grid-cols-3 gap-3">
                {['This week', 'Next week', 'Within a month'].map((timing) => (
                  <button
                    key={timing}
                    onClick={() => handleInputChange('startDate', timing)}
                    className={`p-3 rounded-xl border-2 transition transform hover:scale-105 ${
                      formData.startDate === timing
                        ? 'border-purple-600 bg-purple-50 shadow-lg'
                        : 'border-purple-200 hover:border-purple-300 hover:shadow-md'
                    }`}
                  >
                    <div className="font-medium text-purple-900">{timing}</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleQuickMatch}
              disabled={!formData.shiftType || !formData.county}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition transform hover:scale-105 ${
                formData.shiftType && formData.county
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-xl'
                  : 'bg-purple-200 text-purple-400 cursor-not-allowed'
              }`}
            >
              <Brain className="w-5 h-5 inline mr-2" />
              Find My Perfect Match
            </button>
            
            <p className="text-center text-sm text-purple-500">
              Average match time: 47 seconds
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-purple-600 to-purple-700 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Families Choose FaciliCare</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <Brain className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Advanced AI Matching</h3>
              <p>Our technology analyzes 47+ factors to find your perfect caregiver match</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p>Get matched with qualified CNA/HHA caregivers in minutes, not weeks</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">24/7 Personal Support</h3>
              <p>Dedicated care coordinators guide you through every step of your journey</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">
            Ready to find your perfect caregiver?
          </h2>
          <div className="space-y-4">
            <button 
              onClick={handleQuickMatch}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition shadow-lg mx-2"
            >
              Get Started Now
            </button>
            <div className="text-purple-600">
              <p>Questions? Call us at (845) 304-2452</p>
              <p className="text-sm mt-2">Available 24/7 for your care needs</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FaciliCareApp;
