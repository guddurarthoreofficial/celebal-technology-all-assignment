import React from 'react';

const dummyAlbums = [
  {
    id: 1,
    title: 'After Hours',
    artist: 'The Weeknd',
    cover: '/albums/afterHours.jpg',
  },
  {
    id: 2,
    title: 'Future Nostalgia',
    artist: 'Dua Lipa',
    cover: '/albums/future.jpg',
  },
  {
    id: 3,
    title: 'Justice',
    artist: 'Justin Bieber',
    cover: '/albums/afterHours.jpg',
  },
  {
    id: 4,
    title: 'Divide',
    artist: 'Ed Sheeran',
    cover: '/albums/future.jpg',
  },
  {
    id: 5,
    title: 'Random Access Memories',
    artist: 'Daft Punk',
    cover: '/albums/afterHours.jpg',
  }, 
  {
    id: 5,
    title: 'Random Access Memories',
    artist: 'Daft Punk',
    cover: '/albums/afterHours.jpg',
  },
];

const Albums = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white px-8 py-6">
      <h1 className="text-3xl font-bold mb-6">Albums</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {dummyAlbums.map((album) => (
          <div key={album.id} className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition">
            <img
              src={album.cover}
              alt={album.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h2 className="text-lg font-semibold">{album.title}</h2>
            <p className="text-sm text-gray-400">{album.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
