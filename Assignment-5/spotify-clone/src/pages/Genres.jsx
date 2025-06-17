import React from 'react';

const genres = [
  { id: 1, name: 'Pop', image: '/genres/pop.jpg' },
  { id: 2, name: 'Rock', image: '/genres/rock.jpg' },
  { id: 3, name: 'Hip-Hop', image: '/genres/hiphop.jpg' },
  { id: 4, name: 'Jazz', image: '/genres/jazz.jpg' },
  { id: 5, name: 'Electronic', image: '/genres/electronic.jpg' },
  { id: 6, name: 'Classical', image: '/genres/classical.jpg' },
];

const Genres = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white px-8 py-6">
      <h1 className="text-3xl font-bold mb-6">Browse by Genres</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition group cursor-pointer"
          >
            <img
              src={genre.image}
              alt={genre.name}
              className="w-full h-32 object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-300"
            />
            <h2 className="text-lg font-semibold text-center">{genre.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
