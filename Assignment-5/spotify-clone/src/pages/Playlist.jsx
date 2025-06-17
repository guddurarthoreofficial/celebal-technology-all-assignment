import React from 'react';

const dummyTracks = [
  {
    id: 1,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    duration: '3:20',
    url: '/music/blinding-lights.mp3',
  },
  {
    id: 2,
    title: 'Levitating',
    artist: 'Dua Lipa',
    duration: '3:25',
    url: '/music/levitating.mp3',
  },
  {
    id: 3,
    title: 'Peaches',
    artist: 'Justin Bieber',
    duration: '3:10',
    url: '/music/peaches.mp3',
  },
];

const Playlist = () => {
  return (
    <div className="w-full bg-gradient-to-b from-green-500 to-black text-white min-h-screen overflow-x-hidden">
      {/* Header Section */}
      <div className="flex items-center gap-6 px-8 py-6">
        <img
          src="/playlist-cover.jpg"
          alt="Playlist Cover"
          className="w-48 h-48 rounded shadow-lg"
        />
        <div>
          <p className="uppercase text-sm font-semibold">Playlist</p>
          <h1 className="text-4xl font-bold">My Favourites</h1>
          <p className="mt-2 text-gray-300">Created by You • {dummyTracks.length} songs</p>
        </div>
      </div>

      {/* Track List */}
      <div className="px-8 pb-28">
        {dummyTracks.map((track, index) => (
          <div
            key={track.id}
            className="flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded-lg mb-3 transition"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-300 w-6">{index + 1}</span>
              <div>
                <p className="text-lg font-medium">{track.title}</p>
                <p className="text-sm text-gray-400">{track.artist}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-300">{track.duration}</span>
              <button className="text-green-400 hover:text-green-300 text-sm px-3 py-1 border border-green-400 rounded">
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
