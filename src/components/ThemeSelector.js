import "./ThemeSelector.css";
import { useTheme } from "../hooks/useTheme";
import modeIcon from "../assets/toggle-btn.svg";
import toggleOn from "../assets/toggle-on.svg";

const themeColors = ["#58249c", "#249c6b", "#b70233", "black", "gray"];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };
  console.log(mode);
  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        {mode === "dark" ? (
          <img
            src={toggleOn}
            onClick={toggleMode}
            alt="dark/light toggle icon"
            style={{
              filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
              width: "100%",
              height: "50px",
            }}
          />
        ) : (
          <img
            src={modeIcon}
            onClick={toggleMode}
            alt="dark/light toggle icon"
            style={{
              filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
              width: "100%",
              height: "50px",
            }}
          />
        )}
      </div>
    </div>
  );
}
