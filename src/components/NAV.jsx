import { Link} from "react-router-dom";

function Nav() {
  return (
    <>
  <nav className="p-2 shadow font-sans font-bold">
       <div className= "flex flex-row flex-nowrap ">
        <Link className="p-2 hover:text-cyan-800 " to="/">Blog</Link>
        <Link className="p-2 hover:text-blue-800 " to="/about">About me</Link>
        <Link className="p-2 hover:text-orange-800" to="/social">Social</Link>

         
       </div>
  </nav>

    </>
  );
}

export default Nav;
