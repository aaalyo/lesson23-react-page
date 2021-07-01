import { NavLink } from 'react-router-dom';

function Header() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">My page </a>
                    <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/"> Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/Article"> Article </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/Tags"> Tags </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header