import { useState } from "react";
import Link from "../Link/Link";
import { CgMenuMotion } from "react-icons/cg";
import { AiFillCloseSquare } from "react-icons/ai";

const Nav = () => {

  const [open, setOpen] = useState(false)

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:userId", name: "User Profile" }
  ];

  return (
    <nav className="text-black p-3">

      <div className="text-2xl md:hidden " onClick={() =>setOpen(!open)}>
        {
          open === true ? <AiFillCloseSquare></AiFillCloseSquare> : <CgMenuMotion ></CgMenuMotion> 
        }
        
        
      </div>


      <ul className={`md:flex duration-1000 absolute md:sticky
        ${open ? 'top-8' : '-top-60'} bg-yellow-200 px-4 mt-2`}>
        {
          routes.map(route => <Link key={route.id} route={route}></Link>)
        }
      </ul>

    </nav>
  );
};

export default Nav;