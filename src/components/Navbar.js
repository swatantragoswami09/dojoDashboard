import "./Navbar.css";
import { Link } from "react-router-dom";
import Temple from "../assets/temple.svg";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useTheme } from "../hooks/useTheme";
import ThemeSelector from "./ThemeSelector";

export default function Navbar() {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext();
  const { mode } = useTheme();
  const { color, changeColor } = useTheme();
  return (
    <div className={`navbar recipe ${mode}`}>
      <nav onClick={() => changeColor("black")}>
        <ul>
          <li
            className="logo"
            style={{
              filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
            }}
          >
            <Link to="/">
              {" "}
              <img src={Temple} alt="dojo logo" />
            </Link>
            <span>
              <Link to="/"> The Dojo</Link>
            </span>
          </li>
          {!user && (
            <>
              <li
                style={{
                  filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
                }}
              >
                <Link to="/login">Login</Link>
              </li>
              <li
                style={{
                  filter: mode === "dark" ? "invert(100%)" : "invert(20%)",
                }}
              >
                <Link to="/signup">Signup</Link>
              </li>
              <ThemeSelector />
            </>
          )}
          {user && (
            <>
              <ThemeSelector />
              <li style={{ marginLeft: "10px" }}>
                {!isPending && (
                  <button className="btn" onClick={logout}>
                    Logout
                  </button>
                )}
                {isPending && (
                  <button className="btn" onClick={logout} disabled>
                    Logging out...
                  </button>
                )}
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
