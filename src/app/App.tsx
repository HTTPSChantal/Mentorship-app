import { useState } from 'react';
import { Search, Users, Target, Heart, Menu, X } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import MentorBrowser from '@/app/components/MentorBrowser';
import BecomeMentorForm from '@/app/components/BecomeMentorForm';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'browse' | 'become-mentor'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Heart className="text-indigo-600" size={28} />
              <span className="font-bold text-xl text-gray-900">MentorMatch</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => setCurrentPage('home')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('browse')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'browse' ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Find a Mentor
              </button>
              <button 
                onClick={() => setCurrentPage('become-mentor')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'become-mentor' ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Become a Mentor
              </button>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    setCurrentPage('home');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium ${
                    currentPage === 'home' ? 'text-indigo-600' : 'text-gray-600'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('browse');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium ${
                    currentPage === 'browse' ? 'text-indigo-600' : 'text-gray-600'
                  }`}
                >
                  Find a Mentor
                </button>
                <button 
                  onClick={() => {
                    setCurrentPage('become-mentor');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-sm font-medium ${
                    currentPage === 'become-mentor' ? 'text-indigo-600' : 'text-gray-600'
                  }`}
                >
                  Become a Mentor
                </button>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium w-full">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      {currentPage === 'home' ? (
        <div>
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                    Find Your Perfect <span className="text-indigo-600">Mentor</span>
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Connecting students, newcomers, and individuals seeking growth with experienced mentors who care. 
                    Free mentorship opportunities to help you achieve your goals.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setCurrentPage('browse')}
                      className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg"
                    >
                      Find a Mentor
                    </button>
                    <button 
                      onClick={() => setCurrentPage('become-mentor')}
                      className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
                    >
                      Become a Mentor
                    </button>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1618173887111-3ecfc91c41b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwbWVudG9yc2hpcCUyMG1lZXRpbmd8ZW58MXx8fHwxNzY5ODcwODkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Mentorship meeting"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How It Works
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Getting started with MentorMatch is simple and completely free
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-indigo-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Browse Mentors</h3>
                  <p className="text-gray-600">
                    Search through our diverse community of experienced professionals based on your goals and interests
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="text-indigo-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Match Your Goals</h3>
                  <p className="text-gray-600">
                    Find mentors who specialize in your area of interest, from tech to business to personal development
                  </p>
                </div>

                <div className="text-center p-6">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-indigo-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Connect & Grow</h3>
                  <p className="text-gray-600">
                    Reach out to mentors and start building meaningful relationships that help you achieve your goals
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Who We Serve Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Who We Serve
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  MentorMatch is dedicated to making mentorship accessible to everyone
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Students</h3>
                  <p className="text-gray-600">
                    Whether you're in high school, college, or pursuing further education, find mentors who can guide your academic and career journey.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Newcomers</h3>
                  <p className="text-gray-600">
                    New to a country, city, or industry? Connect with mentors who understand your journey and can help you navigate new opportunities.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Career Changers</h3>
                  <p className="text-gray-600">
                    Making a career transition? Find experienced professionals who can share insights and help you make informed decisions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-indigo-100 mb-8">
                Join thousands of mentees and mentors creating meaningful connections
              </p>
              <button
                onClick={() => setCurrentPage('browse')}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
              >
                Find Your Mentor Today
              </button>
            </div>
          </section>
        </div>
      ) : currentPage === 'browse' ? (
        <MentorBrowser />
      ) : (
        <BecomeMentorForm onBack={() => setCurrentPage('home')} />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="text-indigo-400" size={24} />
            <span className="font-bold text-xl text-white">MentorMatch</span>
          </div>
          <p className="text-sm mb-4">
            Empowering growth through meaningful connections
          </p>
          <p className="text-xs text-gray-500">
            © 2026 MentorMatch. Making mentorship accessible to all.
          </p>
        </div>
      </footer>
    </div>
  );
}