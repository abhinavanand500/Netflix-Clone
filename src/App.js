import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
function App() {
    return (
        <div className='App'>
            {/* Created By Abhinav Anand 🚀 */}
            <HomeScreen />
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about'>About</Link>
                            </li>
                            <li>
                                <Link to='/users'>Users</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path='/about'>
                            <About />
                        </Route>
                        <Route path='/users'>
                            <Users />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
