import { useState } from "react";
import { FiBell, FiUser, FiSettings, FiMenu, FiSearch } from "react-icons/fi";

type Props = {
  onToggleSidebar: () => void;
  onSearch: (query: string) => void;
  placeholder?: string;
};

export default function HeaderBar({ onSearch, placeholder }: Props) {
  const [query, setQuery] = useState("");

  return (
    <header className="topBar">
      <div className="topLeft">
      </div>

      <div className="searchWrap">
        <div className="search">
          <span className="searchIconWrap" aria-hidden>
            <FiSearch size={14} />
          </span>
          <input
            value={query}
            onChange={(e) => {
              const v = e.target.value;
              setQuery(v);
              onSearch(v);
            }}
            placeholder={placeholder ?? "Search..."}
          />
        </div>
      </div>

      <div className="topRight">
        <button className="iconBtn" aria-label="Notifications" title="Notifications">
          <FiBell size={18} />
        </button>
        <button className="iconBtn" aria-label="Profile" title="Profile">
          <FiUser size={18} />
        </button>
        <button className="iconBtn" aria-label="Settings" title="Settings">
          <FiSettings size={18} />
        </button>
      </div>
    </header>
  );
}
