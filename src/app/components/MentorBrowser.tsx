import { useState } from 'react';
import { Search, Filter, MapPin, Briefcase, Star } from 'lucide-react';
import MentorCard from '@/app/components/MentorCard';
import { mentorsData, categories } from '@/app/data/mentorsData';
import MentorshipRequestForm from '@/app/components/MentorshipRequestForm';

export default function MentorBrowser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMentor, setSelectedMentor] = useState<typeof mentorsData[0] | null>(null);
  const [showRequestForm, setShowRequestForm] = useState(false);

  const filteredMentors = mentorsData.filter(mentor => {
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase())) ||
      mentor.bio.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = 
      selectedCategory === 'All' || mentor.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Find Your Mentor
          </h1>
          <p className="text-gray-600">
            Browse our community of {mentorsData.length}+ experienced mentors ready to help you achieve your goals
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name, expertise, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white appearance-none cursor-pointer min-w-[200px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredMentors.length}</span> mentor{filteredMentors.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Mentor Grid */}
        {filteredMentors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map(mentor => (
              <MentorCard
                key={mentor.id}
                mentor={mentor}
                onViewProfile={() => setSelectedMentor(mentor)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl">
            <p className="text-gray-500 text-lg">No mentors found matching your criteria.</p>
            <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Mentor Detail Modal */}
        {selectedMentor && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedMentor(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <img
                    src={selectedMentor.avatar}
                    alt={selectedMentor.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                      {selectedMentor.name}
                    </h2>
                    <p className="text-indigo-600 font-medium mb-2">{selectedMentor.title}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      {selectedMentor.location && (
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{selectedMentor.location}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Briefcase size={16} />
                        <span>{selectedMentor.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <span>{selectedMentor.rating} ({selectedMentor.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-2">About</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedMentor.bio}</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-3">Areas of Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMentor.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedMentor.languages && (
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-2">Languages</h3>
                    <p className="text-gray-600">{selectedMentor.languages.join(', ')}</p>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 mb-2">Availability</h3>
                  <p className="text-gray-600">{selectedMentor.availability}</p>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowRequestForm(true)}
                    className="flex-1 bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Request Mentorship
                  </button>
                  <button
                    onClick={() => setSelectedMentor(null)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mentorship Request Form */}
        {showRequestForm && selectedMentor && (
          <MentorshipRequestForm
            mentor={selectedMentor}
            onClose={() => {
              setShowRequestForm(false);
              setSelectedMentor(null);
            }}
          />
        )}
      </div>
    </div>
  );
}