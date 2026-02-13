import { useMemo, useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import HeaderBar from "./components/HeaderBar";
import MainPage from "./components/MainPage";
import PlayerFooter from "./components/PlayerFooter";

export type Playlist = {
  id: string;
  name: string;
  songsCount: number;
  duration: string; // "0:38"
};

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const playlists = useMemo<Playlist[]>(
    () => [
      { id: "p1", name: "Playlist 1", songsCount: 5, duration: "0:38" },
      { id: "p2", name: "Playlist 1", songsCount: 5, duration: "0:38" },
    ],
    []
  );

  return (
    <div className="appShell">
      <div className="appFrame">
        <Sidebar
          open={sidebarOpen}
          playlists={playlists}
          onToggle={() => setSidebarOpen((v) => !v)}
          onCreatePlaylist={() => alert("Create Playlist")}
          onSelectPlaylist={(id) => alert(`Selected playlist ${id}`)}
        />

        <main className="mainColumn">
          <HeaderBar
            onToggleSidebar={() => setSidebarOpen((v) => !v)}
            onSearch={(q) => console.log("Search:", q)}
            placeholder="Search..."
          />
          <MainPage />
        </main>

        <PlayerFooter
          songTitle="Song Name"
          artistName="Artist name"
          currentTime="00:00"
          totalTime="00:38"
          onPrev={() => console.log("prev")}
          onPlayPause={() => console.log("play/pause")}
          onNext={() => console.log("next")}
          onSeek={(v) => console.log("seek", v)}
          onVolume={(v) => console.log("volume", v)}
        />
      </div>
    </div>
  );
}

