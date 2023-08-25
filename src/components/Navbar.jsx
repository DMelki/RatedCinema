import { Link, useNavigate } from "react-router-dom";
import {BiSearchAlt2} from 'react-icons/bi'
import { TfiVideoCamera } from "react-icons/tfi";
import { useState } from "react";

import './navbar.css'

const Navbar = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      if(!search) return;

      navigate(`/search?q=${search}`, {replace: true});
      setSearch("");
    }


    return (
      <header id="cabec">
        <nav id="navbar">
          <h2 >
            <Link to ='/'>
              <TfiVideoCamera className="cam"/>Rated Cinema
            </Link>
          </h2>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Busque um filme"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            />
            <button type="submit" >
              <BiSearchAlt2 />
              </button>
         </form>
        </nav>
        </header>
    )
}

export default Navbar