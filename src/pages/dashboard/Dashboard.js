import "./Dashboard.css";
import { useTheme } from "../../hooks/useTheme";
import { useCollection } from "../../hooks/useCollection";
import ProjectList from "../../components/ProjectList";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");

  const { mode } = useTheme();
  return (
    <div
      style={{
        filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
      }}
    >
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
}
