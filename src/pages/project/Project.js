import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { useDocument } from "../../hooks/useDocument";
import ProjectSummary from "./ProjectSummary";

export default function Project() {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);
  const { mode } = useTheme();

  if (error) {
    return (
      <div
        style={{
          filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
        }}
        className="error"
      >
        {error}
      </div>
    );
  }

  if (!document) {
    return (
      <div
        style={{
          filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
        }}
        className="loading"
      >
        Loading....
      </div>
    );
  }
  return (
    <div
      className="project-details"
      style={{
        filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
      }}
    >
      <ProjectSummary project={document} />
    </div>
  );
}
