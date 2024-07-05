import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-950">Real</span>
            <span className="text-red-500">Estate</span>
          </h1>
        </Link>
        <form className="bg-white border p-3 rounded-lg flex items-center shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 md:w-45 "
          />
          <FaSearch className="text-slate-950" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-950 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-950 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className=" text-slate-950 hover:underline">Sign in</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
