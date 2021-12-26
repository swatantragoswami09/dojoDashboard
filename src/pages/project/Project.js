import { useTheme } from "../../hooks/useTheme";
export default function Project() {
  const { mode } = useTheme();
  return (
    <div
      style={{
        filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
      }}
    >
      Project page
    </div>
  );
}
