import type { Playlist } from "../App";
import { FiMenu, FiPlus, FiMusic, FiList } from "react-icons/fi";

type Props = {
  open: boolean;
  playlists: Playlist[];
  onToggle: () => void;
  onCreatePlaylist: () => void;
  onSelectPlaylist: (playlistId: string) => void;
};

export default function Sidebar({ open, playlists, onToggle, onCreatePlaylist, onSelectPlaylist }: Props) {
  return (
    <aside className={`sidebar ${open ? "open" : "closed"}`}>
      <div className="sidebarTop">
        <button className="playlistThumb" aria-label="Toggle sidebar" onClick={onToggle} title="Toggle sidebar">
          <FiMenu size={18} />
        </button>
      </div>

      <div className="sidebarContent">
        {open ? (
          <div className="playlistSection">
            <div className="playlistList">
              {playlists.map((pl) => (
                <button key={pl.id} className="playlistCard" onClick={() => onSelectPlaylist(pl.id)} title={pl.name}>
                  <div className="playlistThumb">
                    <FiMusic size={18} />
                  </div>
                  <div className="playlistMeta">
                    <div className="playlistName">{pl.name}</div>
                    <div className="playlistSub">
                      {pl.songsCount} songs | {pl.duration}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="sidebarFooter">
              <button className="primaryBtn" onClick={onCreatePlaylist}>
                <FiPlus size={16} /> Create Playlist
              </button>
            </div>
          </div>
        ) : (
          <div className="sidebarIcons">
            <button className="sidebarSquare" aria-label="Library">
              <FiMusic size={18} />
            </button>
            <button className="sidebarSquare" aria-label="Playlists">
              <FiList size={18} />
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
