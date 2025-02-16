import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="mainConatiner">
        <div className="logoContainer">
          <NavLink to="/">Rahul-Dogney</NavLink>
        </div>
        <div className="vistingList">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="trad">Fetch Old</NavLink>
            </li>
            <li>
              <NavLink to="/rq">FetchRQ</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
