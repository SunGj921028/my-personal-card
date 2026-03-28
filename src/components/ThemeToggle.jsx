export function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label="D/N Mode"
      aria-pressed={isDark}
      onClick={onToggle}
    >
      <span className="theme-dot" aria-hidden="true">
        <svg className="theme-ico" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 12.5C19.9 13.1 18.6 13.5 17.1 13.5C13 13.5 9.7 10.2 9.7 6.1C9.7 4.6 10.1 3.3 10.7 2.2C7.4 3.5 5 6.7 5 10.4C5 15.2 8.9 19.1 13.7 19.1C17.4 19.1 20.6 16.7 21.9 13.4C21.6 13.1 21.3 12.8 21 12.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ display: isDark ? "block" : "none" }}
          />
          <g style={{ display: isDark ? "none" : "block" }}>
            <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M12 3.3V5.2M12 18.8V20.7M3.3 12H5.2M18.8 12H20.7M5.8 5.8L7.2 7.2M16.8 16.8L18.2 18.2M16.8 7.2L18.2 5.8M5.8 18.2L7.2 16.8"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </span>
      <span className="theme-label">{isDark ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
}
