import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './app/Home/Home.js';

export default function App() {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <ul className="nav-bar--wrapper">
            <li className="nav-bar--item">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}