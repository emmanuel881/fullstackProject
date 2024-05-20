//importing links
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Fitness Family</h1>
          <p>Your health,.. Your wealth</p>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
