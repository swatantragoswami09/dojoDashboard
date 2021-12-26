import "./ProjectList.css";
import { useTheme } from "../hooks/useTheme";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function ProjectList({ projects }) {
  const { mode } = useTheme();
  return (
    <div className="project-list">
      {projects.lenght === 0 && <p>No project yet!</p>}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <ul>
              {project.assignedUsersList.map((user) => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
}
