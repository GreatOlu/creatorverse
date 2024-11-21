import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <h3>CREATORVERSE</h3>
            </div>
            <nav className="navbar-menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/create">Add Creator</Link></li>
                </ul>
            </nav>
        </header>
    );
}
 
export default Navbar;