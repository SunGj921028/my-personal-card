import { BackgroundBlobs } from "./components/BackgroundBlobs.jsx";
import { PersonalCard } from "./components/PersonalCard.jsx";
import { ThemeToggle } from "./components/ThemeToggle.jsx";
import { Toast } from "./components/Toast.jsx";
import { useTheme } from "./hooks/useTheme.js";
import { useToast } from "./hooks/useToast.js";

export default function App() {
  const { toggle, isDark } = useTheme();
  const { visible, message, showToast } = useToast();

  return (
    <>
      <BackgroundBlobs />

      <main className="wrap">
        <section className="shell" aria-label="My Personal Card">
          <div className="topbar">
            <ThemeToggle isDark={isDark} onToggle={toggle} />
          </div>

          <PersonalCard onShowToast={showToast} />
        </section>

        <Toast visible={visible} message={message} />
      </main>
    </>
  );
}
