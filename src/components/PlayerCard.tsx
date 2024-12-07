import React, { useState } from 'react';
import { User, X } from 'lucide-react';

interface PlayerCardProps {
  name: string;
  position: string;
  rating: number;
  price: string;
  team: string;
  imageUrl: string;
  description: string;
}

export default function PlayerCard({
  name,
  position,
  rating,
  price,
  team,
  imageUrl,
  description,
}: PlayerCardProps) {
  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
        <div 
          className="h-48 bg-gray-200 cursor-pointer relative overflow-hidden"
          onClick={() => setShowFullImage(true)}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <User size={48} className="text-gray-400" />
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
              OVR: {rating}
            </span>
          </div>
          
          <div className="mt-2 text-sm text-gray-600">
            <p>Position: {position}</p>
            <p>Team: {team}</p>
          </div>
          
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">{description}</p>
          
          <div className="mt-4 flex justify-between items-center">
            <span className="text-lg font-bold text-red-600">{price} KWD</span>
          </div>
        </div>
      </div>

      {showFullImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setShowFullImage(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={() => setShowFullImage(false)}
            >
              <X size={24} />
            </button>
            <img
              src={imageUrl}
              alt={name}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}