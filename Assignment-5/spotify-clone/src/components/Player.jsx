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
    <div className="bg-gray-800 text-white p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-bold">{track.title}</h2>
          <p className="text-sm">{track.artist}</p>
        </div>
        <button onClick={togglePlay} className="px-4 py-2 bg-green-500 rounded">
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm w-10">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleProgressChange}
          className="w-full h-1 rounded-lg overflow-hidden appearance-none bg-green-500"
        />
        <span className="text-sm w-10 text-right">{formatTime(duration)}</span>
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
