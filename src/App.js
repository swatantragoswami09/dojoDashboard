import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Create from "./pages/create/Create";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import Signup from "./pages/signup/Signup";
import Forget from "./pages/forget/Forget";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Sidebar />
          <div className="container">
            <Navbar />
            <Switch>
              <Route path="/" exact>
                {!user && <Redirect to="/login" />}
                {user && <Dashboard />}
              </Route>
              <Route path="/create" exact>
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>
              <Route path="/projects/:id" exact>
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
              <Route path="/login" exact>
                {user && <Redirect to="/" />}
                {!user && <Login />}
              </Route>
              <Route path="/signup" exact>
                {user && <Redirect to="/" />}
                {!user && <Signup />}
              </Route>
              <Route path="/forget">
                {user && <Redirect to="/" />}
                {!user && <Forget />}
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

// pages
//  -dashboard
//  -login
//  -signup
//  -create
//  -project (project details)
