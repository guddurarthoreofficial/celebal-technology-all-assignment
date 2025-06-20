import { useRef, useState, useEffect } from 'react';

const Player = ({ track }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setCurrentTime(0);
      setPlaying(false);
    }
  }, [track]);

  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-4 shadow-lg rounded-t-xl">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Song Info */}
        <div>
          <h2 className="text-lg font-semibold">{track.title}</h2>
          <p className="text-sm text-gray-400">{track.artist}</p>
        </div>

        {/* Play Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="px-4 py-2 bg-green-500 hover:bg-green-400 transition rounded-full text-sm font-medium shadow"
          >
            {playing ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center gap-3 mt-4">
        <span className="text-xs w-12 text-right">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full accent-green-500 cursor-pointer"
        />
        <span className="text-xs w-12">{formatTime(duration)}</span>
      </div>

      <audio
        ref={audioRef}
        src={track.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
};

export default Player;
