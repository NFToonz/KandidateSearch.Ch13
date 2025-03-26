import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className="navigation">
            <ul className="navigation-list">
                <li className="navigation-item"><Link to="/">Home</Link></li> 
                <li className="navigation-item"><Link to="/CandidateSearch">Search</Link></li>
                <li className="navigation-item"><Link to="/SavedCandidates">Saved</Link></li>
            </ul>
        </nav>
  )
};

export default Nav;
