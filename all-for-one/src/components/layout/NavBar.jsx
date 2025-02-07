import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-white row-start-1 row-span-1 col-span-full grid grid-cols-12 h-fit">
      <Link to="/">
      <img
        className="h-full max-h-16"
        src="public/assets/dungeon-solid.svg"
        alt="Nav Item: Icon of a dungeon Gate"
      ></img>
      </Link>
      <h1 className="text-black col-start-4 col-end-9 text-center">All For One</h1>
    </nav>
  );
};

export default NavBar;