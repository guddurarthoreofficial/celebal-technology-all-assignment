const SongCard = ({ song, onSelect }) => (
  <div
    onClick={onSelect}
    className="cursor-pointer bg-white p-4 rounded shadow hover:bg-green-100"
  >
    <img src={song.cover} alt={song.title} className="w-full h-40 object-cover rounded" />
    <h3 className="mt-2 font-bold">{song.title}</h3>
    <p className="text-sm">{song.artist}</p>
  </div>
);

export default SongCard;