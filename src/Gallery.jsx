import React, { useState } from "react";
import Baluty from './assets/baluty.png';
import Karpaty from './assets/karpaty.png';
import Mazury from './assets/mazury.png';
import Puszcza from './assets/puszcza.png';
import Sopot from './assets/sopot.png';

const Images = [
  { id: 1, title: "Łódź Bałuty", src: Baluty, alt: "Górskie jezioro" },
  { id: 2, title: "Karpaty", src: Karpaty, alt: "Karpaty" },
  { id: 3, title: "Mazury", src: Mazury, alt: "Mazury" },
  { id: 4, title: "Puszcza Białowieska", src: Puszcza, alt: "Puszcza Białowieska" },
  { id: 5, title: "Sopot", src: Sopot, alt: "Sopot" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("");

  const filteredImages = Images.filter((image) =>
    image.title.toLowerCase().includes(filter)
  );
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Filtruj zdjęcia"
          value={filter}
          onChange={handleFilterChange}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            onClick={() => handleImageClick(image)}
            className="cursor-pointer group overflow-hidden rounded-lg shadow-lg bg-white"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="p-3 text-center">
              <p className="text-lg font-semibold text-gray-700 group-hover:text-blue-500 transition-colors">
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={closeImage}
        >
          <div
            className="relative max-w-3xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
            <button
              onClick={closeImage}
              className="absolute top-3 right-3 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
