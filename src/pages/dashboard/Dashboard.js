import "./Dashboard.css";
import { useTheme } from "../../hooks/useTheme";
export default function Dashboard() {
  const { mode } = useTheme();
  return (
    <div
      style={{
        filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
      }}
    >
      dashboard
    </div>
  );
}
