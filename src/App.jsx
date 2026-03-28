import { BackgroundBlobs } from "./components/BackgroundBlobs.jsx";
import { PersonalCard } from "./components/PersonalCard.jsx";
import { ThemeToggle } from "./components/ThemeToggle.jsx";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
  const { toggle, isDark } = useTheme();

  return (
    <>
      <BackgroundBlobs />

      <main className="wrap">
        <section className="shell" aria-label="My Personal Card">
          <div className="topbar">
            <ThemeToggle isDark={isDark} onToggle={toggle} />
          </div>

          <PersonalCard />
        </section>
      </main>
    </>
  );
}
