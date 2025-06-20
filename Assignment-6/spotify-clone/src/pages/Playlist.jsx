import React, { useRef, useState, useEffect } from 'react';

const dummyTracks = [
  {
    id: 1,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    duration: '3:20',
    url: '/song.mp3',
  },
  {
    id: 2,
    title: 'Levitating',
    artist: 'Dua Lipa',
    duration: '3:25',
    url: '/song2.mp3',
  },
  {
    id: 3,
    title: 'Peaches',
    artist: 'Justin Bieber',
    duration: '3:10',
    url: '/song.mp3',
  },
  {
    id: 4,
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    duration: '3:30',
    url: '/song2.mp3',
  },
];

const Playlist = () => {
  const audioRef = useRef(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlay = (track) => {
    if (currentTrack?.id === track.id) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  useEffect(() => {
    if (currentTrack) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && isPlaying) {
        const percentage =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(percentage || 0);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="w-full bg-gradient-to-b from-green-600 to-black text-white min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center gap-6 px-6 py-8">
        <img
          src="/playlist/playlist.jpg"
          alt="Playlist Cover"
          className="w-40 h-40 md:w-52 md:h-52 rounded shadow-lg object-cover"
        />
        <div className="text-center md:text-left">
          <p className="uppercase text-sm tracking-widest text-green-200">Playlist</p>
          <h1 className="text-3xl md:text-5xl font-bold mt-2">My Favourites</h1>
          <p className="text-gray-300 mt-2">Created by You • {dummyTracks.length} songs</p>
        </div>
      </header>

      {/* Track List */}
      <section className="px-4 sm:px-8 mb-40">
        {dummyTracks.map((track, index) => (
          <div
            key={track.id}
            className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition rounded-xl px-4 py-3 mb-3"
          >
            <div className="flex items-center gap-4 min-w-0">
              <span className="text-sm text-gray-300 w-6">{index + 1}</span>
              <div className="min-w-0">
                <p className="text-base font-medium truncate">{track.title}</p>
                <p className="text-sm text-gray-400 truncate">{track.artist}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <span className="text-sm text-gray-300 hidden sm:block">{track.duration}</span>
              <button
                onClick={() => handlePlay(track)}
                className="text-sm px-3 py-1 border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition"
              >
                {currentTrack?.id === track.id && isPlaying ? 'Pause' : 'Play'}
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Audio Element */}
      <audio ref={audioRef} src={currentTrack?.url} onEnded={() => setIsPlaying(false)} />

      {/* Bottom Music Player */}
      {currentTrack && (
        <footer className="fixed bottom-0 left-0 right-0 bg-[#111] border-t border-gray-700 p-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/playlist/playlist.jpg"
              alt="cover"
              className="w-12 h-12 rounded object-cover"
            />
            <div className="text-left">
              <p className="text-sm font-semibold truncate">{currentTrack.title}</p>
              <p className="text-xs text-gray-400 truncate">{currentTrack.artist}</p>
            </div>
          </div>
          <div className="flex-1 w-full sm:w-auto mx-2 sm:mx-4">
            <div className="h-1 bg-gray-600 rounded overflow-hidden">
              <div
                className="h-1 bg-green-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <button
            onClick={() => handlePlay(currentTrack)}
            className="text-white px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </footer>
      )}
    </div>
  );
};

export default Playlist;
