import { useState } from 'react';
import { ArrowLeft, Send, CheckCircle } from 'lucide-react';

interface BecomeMentorFormProps {
  onBack: () => void;
}

export default function BecomeMentorForm({ onBack }: BecomeMentorFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    languages: '',
    
    // Canadian Experience
    yearsInCanada: '',
    immigrationStatus: '',
    
    // Professional Information
    currentJobTitle: '',
    company: '',
    industry: '',
    yearsOfExperience: '',
    
    // Expertise 
    // Mentorship
    category: '',
    expertise: '',
    bio: '',
    whyMentor: '',
    availability: '',
    preferredMeetingFormat: '',
    maxMentees: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    console.log('Mentor application submitted:', formData);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your interest in becoming a mentor, {formData.firstName}! 
              We'll review your application and get back to you within 3-5 business days.
            </p>
            <p className="text-gray-600 mb-8">
              We've sent a confirmation email to <span className="font-semibold">{formData.email}</span>
            </p>
            <button
              onClick={onBack}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Become a Mentor</h1>
            <p className="text-gray-600">
              Share your knowledge and experience to help others achieve their goals
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm font-medium ${currentStep >= 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
                Personal Info
              </span>
              <span className={`text-sm font-medium ${currentStep >= 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
                Experience
              </span>
              <span className={`text-sm font-medium ${currentStep >= 3 ? 'text-indigo-600' : 'text-gray-400'}`}>
                Mentorship Details
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-5">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h2>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-1">
                    Location (City, Province) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Toronto, ON"
                  />
                </div>

                <div>
                  <label htmlFor="languages" className="block text-sm font-medium text-gray-900 mb-1">
                    Languages You Speak <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="languages"
                    name="languages"
                    required
                    value={formData.languages}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="e.g., English, French, Spanish"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="yearsInCanada" className="block text-sm font-medium text-gray-900 mb-1">
                      How Long Have You Been in Canada? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="yearsInCanada"
                      name="yearsInCanada"
                      required
                      value={formData.yearsInCanada}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                    >
                      <option value="">Select duration</option>
                      <option value="less-than-1">Less than 1 year</option>
                      <option value="1-2">1-2 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="6-10">6-10 years</option>
                      <option value="more-than-10">More than 10 years</option>
                      <option value="born-in-canada">Born in Canada</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="immigrationStatus" className="block text-sm font-medium text-gray-900 mb-1">
                      Immigration Status
                    </label>
                    <select
                      id="immigrationStatus"
                      name="immigrationStatus"
                      value={formData.immigrationStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="citizen">Canadian Citizen</option>
                      <option value="permanent-resident">Permanent Resident</option>
                      <option value="work-permit">Work Permit</option>
                      <option value="study-permit">Study Permit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Professional Experience */}
            {currentStep === 2 && (
              <div className="space-y-5">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Professional Experience</h2>

                <div>
                  <label htmlFor="currentJobTitle" className="block text-sm font-medium text-gray-900 mb-1">
                    Current Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="currentJobTitle"
                    name="currentJobTitle"
                    required
                    value={formData.currentJobTitle}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="e.g., Senior Software Engineer"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-1">
                      Company/Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="e.g., ABC Tech Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-900 mb-1">
                      Industry <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                    >
                      <option value="">Select industry</option>
                      <option value="Technology">Technology</option>
                      <option value="Finance">Finance</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Business">Business/Consulting</option>
                      <option value="Marketing">Marketing/Media</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Creative">Creative Arts</option>
                      <option value="Nonprofit">Nonprofit</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-900 mb-1">
                    Years of Professional Experience <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="yearsOfExperience"
                    name="yearsOfExperience"
                    required
                    value={formData.yearsOfExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="">Select experience</option>
                    <option value="1-2">1-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="11-15">11-15 years</option>
                    <option value="16-20">16-20 years</option>
                    <option value="20+">20+ years</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="expertise" className="block text-sm font-medium text-gray-900 mb-1">
                    Areas of Expertise <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="expertise"
                    name="expertise"
                    required
                    value={formData.expertise}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="e.g., Web Development, React, Career Planning, Interview Prep"
                  />
                  <p className="text-sm text-gray-500 mt-1">Separate multiple areas with commas</p>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Next Step
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Mentorship Details */}
            {currentStep === 3 && (
              <div className="space-y-5">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Mentorship Details</h2>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-900 mb-1">
                    Primary Mentorship Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="">Select category</option>
                    <option value="Technology">Technology</option>
                    <option value="Business">Business</option>
                    <option value="Career Development">Career Development</option>
                    <option value="Personal Growth">Personal Growth</option>
                    <option value="Creative Arts">Creative Arts</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bio" className="block text-sm font-medium text-gray-900 mb-1">
                    About You (Bio) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    required
                    value={formData.bio}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    placeholder="Share your professional journey and what makes you a great mentor..."
                  />
                  <p className="text-sm text-gray-500 mt-1">This will be displayed on your mentor profile</p>
                </div>

                <div>
                  <label htmlFor="whyMentor" className="block text-sm font-medium text-gray-900 mb-1">
                    Why Do You Want to Be a Mentor? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="whyMentor"
                    name="whyMentor"
                    required
                    value={formData.whyMentor}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    placeholder="Share your motivation for volunteering as a mentor..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium text-gray-900 mb-1">
                      Availability <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      required
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                    >
                      <option value="">Select availability</option>
                      <option value="Weekday mornings">Weekday mornings</option>
                      <option value="Weekday afternoons">Weekday afternoons</option>
                      <option value="Weekday evenings">Weekday evenings</option>
                      <option value="Weekends">Weekends</option>
                      <option value="Flexible schedule">Flexible schedule</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="preferredMeetingFormat" className="block text-sm font-medium text-gray-900 mb-1">
                      Preferred Meeting Format <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="preferredMeetingFormat"
                      name="preferredMeetingFormat"
                      required
                      value={formData.preferredMeetingFormat}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                    >
                      <option value="">Select format</option>
                      <option value="Video calls">Video calls</option>
                      <option value="In-person">In-person (local only)</option>
                      <option value="Both">Both video and in-person</option>
                      <option value="Email/messaging">Email/messaging</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="maxMentees" className="block text-sm font-medium text-gray-900 mb-1">
                    Maximum Number of Mentees <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="maxMentees"
                    name="maxMentees"
                    required
                    value={formData.maxMentees}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                  >
                    <option value="">Select number</option>
                    <option value="1-2">1-2 mentees</option>
                    <option value="3-5">3-5 mentees</option>
                    <option value="6-10">6-10 mentees</option>
                    <option value="10+">10+ mentees</option>
                  </select>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Commitment:</span> As a volunteer mentor, you'll be 
                    expected to dedicate time to support your mentees. We recommend at least one 30-60 minute 
                    session per month per mentee.
                  </p>
                </div>

                <div className="flex justify-between pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
                  >
                    <Send size={18} />
                    Submit Application
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
