import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import SongCard from '../components/SongCard'
import Player from '../components/Player'
import { songs as songData } from '../data/songs';


const Home = () => {
    const [songs, setSongs] = useState(songData);
    const [currentTrack, setCurrentTrack] = useState(songData[0]);
    const [query, setQuery] = useState('');

    const handleSearch = (q) => {
        setQuery(q);
        const filtered = songData.filter(
            (s) =>
                s.title.toLowerCase().includes(q.toLowerCase()) ||
                s.artist.toLowerCase().includes(q.toLowerCase())
        );
        setSongs(filtered);
    };
    return (
        <div className="flex-1 flex flex-col overflow-hidden">
            <header className="p-4 bg-white shadow">
                <SearchBar onSearch={handleSearch} />
            </header>
            <main className="p-4 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {songs.map((song) => (
                    <SongCard key={song.id} song={song} onSelect={() => setCurrentTrack(song)} />
                ))}
            </main>

            <div className="fixed bottom-5 left-64 w-[calc(100%-16rem)] z-50 ">
                <Player track={currentTrack} />
            </div>


        </div>
    )
}

export default Home