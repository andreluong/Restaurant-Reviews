import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons'

import AddReview from './components/add-review.js';
import Restaurant from './components/restaurants.js';
import RestaurantsList from './components/restaurants-list.js';
import Login from './components/login.js';

const App = () => {
    const [user, setUser] = React.useState(null);

    async function login(user = null) {
        setUser(user);
    }

    async function logout() {
        setUser(null);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a href="/restaurants" className="navbar-brand p-3">
                    <FontAwesomeIcon icon={faAward} className="pe-1" />Restaurant Reviews
                </a>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/restaurants"} className="nav-link">Restaurants</Link>
                    </li>
                    <li className="nav-item">
                        { user ? (
                            <a href="/" onClick={logout} className="nav-link" style={{cursor:'pointer'}}>Logout {user.name}</a>
                        ) : (            
                            <Link to={"/login"} className="nav-link">Login</Link>
                        )}
                    </li>
                </div>
            </nav>
            
            <div className="container mt-3">
                <Switch>
                    <Route exact path={["/", "/restaurants"]} component={RestaurantsList} />
                    <Route path="/restaurants/:id/review" render={(props) => (
                        <AddReview {...props} user={user} />
                    )} />
                    <Route path="/restaurants/:id" render={(props) => (
                        <Restaurant {...props} user={user} />
                    )} />
                    <Route path="/login" render={(props) => (
                        <Login {...props} login={login} />
                    )} />
                </Switch>
            </div>
        </div>
    );
}

export default App;