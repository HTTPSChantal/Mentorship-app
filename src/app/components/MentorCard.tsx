import { MapPin, Star, Users } from 'lucide-react';

interface Mentor {
  id: number;
  name: string;
  title: string;
  avatar: string;
  category: string;
  expertise: string[];
  location?: string;
  rating: number;
  reviews: number;
  mentees: number;
  bio: string;
  experience: string;
  languages?: string[];
  availability: string;
}

interface MentorCardProps {
  mentor: Mentor;
  onViewProfile: () => void;
}

export default function MentorCard({ mentor, onViewProfile }: MentorCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={mentor.avatar}
            alt={mentor.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-gray-900 truncate">{mentor.name}</h3>
            <p className="text-sm text-indigo-600 mb-1">{mentor.title}</p>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span>{mentor.rating}</span>
              <span className="text-gray-400">({mentor.reviews})</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{mentor.bio}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.expertise.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-xs"
            >
              {skill}
            </span>
          ))}
          {mentor.expertise.length > 3 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
              +{mentor.expertise.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          {mentor.location && (
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              <span>{mentor.location}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Users size={12} />
            <span>{mentor.mentees} mentees</span>
          </div>
        </div>

        <button
          onClick={onViewProfile}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
