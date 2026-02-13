import { FiX, FiSkipBack, FiSkipForward, FiShuffle, FiVolume2 } from "react-icons/fi";
import { FaPlay, FaPause } from "react-icons/fa";
import { useState } from "react";

type Props = {
  songTitle: string;
  artistName: string;
  currentTime: string;
  totalTime: string;
  onPrev: () => void;
  onPlayPause: () => void;
  onNext: () => void;
  onSeek: (value: number) => void;
  onVolume: (value: number) => void;
};

export default function PlayerFooter({
  songTitle,
  artistName,
  currentTime,
  totalTime,
  onPrev,
  onPlayPause,
  onNext,
  onSeek,
  onVolume,
}: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <footer className="playerBar">
      <div className="nowPlaying">
        <div className="npThumb" />
        <div className="npText">
          <div className="npTitle">{songTitle}</div>
          <div className="npArtist">{artistName}</div>
        </div>
      </div>

      <div className="transport">
        <div className="controls">
          <button className="iconBtn sm" aria-label="Close" title="Close">
            <FiX size={16} />
          </button>

          <button className="iconBtn sm" aria-label="Previous" title="Previous" onClick={onPrev}>
            <FiSkipBack size={16} />
          </button>

          <button
            className="iconBtn sm"
            aria-label="Play/Pause"
            title="Play/Pause"
            onClick={() => {
              setIsPlaying((v) => !v);
              onPlayPause();
            }}
          >
            {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
          </button>

          <button className="iconBtn sm" aria-label="Next" title="Next" onClick={onNext}>
            <FiSkipForward size={16} />
          </button>

          <button className="iconBtn sm" aria-label="Shuffle" title="Shuffle">
            <FiShuffle size={16} />
          </button>
        </div>

        <div className="timeline">
          <span className="time">{currentTime}</span>
          <input className="range" type="range" min={0} max={100} defaultValue={0} onChange={(e) => onSeek(+e.target.value)} />
          <span className="time">{totalTime}</span>
        </div>
      </div>

      <div className="playerRight">
        <button className="iconBtn sm" aria-label="Volume" title="Volume">
          <FiVolume2 size={16} />
        </button>
        <input className="range vol" type="range" min={0} max={100} defaultValue={75} onChange={(e) => onVolume(+e.target.value)} />
      </div>
    </footer>
  );
}
