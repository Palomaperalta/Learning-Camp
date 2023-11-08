import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

function Root() {
  return (
    <>
      <header className="bg-green-400 flex justify-center py-4 px-8 border-b-2 border-green-700">
        <span className="absolute left-8 text-xl font-semibold flex gap-2 items-center">
          <img className="h-8 w-8" src={logo} alt="logo" />
          Green Island
        </span>

        <nav>
          <ul className="flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Root;
