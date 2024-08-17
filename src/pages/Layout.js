import { Outlet } from "react-router-dom";
import { homepageURL } from "../lib/data";
import logo from "../images/Logo.png";
import { useState } from "react";

export default function Layout() {
  const [openMenu, setOpenMenu] = useState(false);

  function changeMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <header>
        <a href={homepageURL}>
          <img src={logo} alt="Logo" />
        </a>
        <nav>
          <ul>
            <li>
              <a href={homepageURL + "how-it-works"}>How it works</a>
            </li>
            <span>|</span>
            <li>
              <a href={homepageURL + "pricing"}>Pricing</a>
            </li>
            <span>|</span>
            <li>
              <a href={homepageURL + "case-studies"}>Case studies</a>
            </li>
            <span>|</span>
            <li>
              <a href={homepageURL + "about"}>About</a>
            </li>
          </ul>
        </nav>
        <a href={homepageURL + "demo"}>Get a demo</a>
        <button className={openMenu ? "change" : ""} onClick={changeMenu}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        {openMenu ? (
          <nav>
            <ul>
              <li>
                <a href={homepageURL + "how-it-works"}>How it works</a>
              </li>
              <li>
                <a href={homepageURL + "pricing"}>Pricing</a>
              </li>
              <li>
                <a href={homepageURL + "case-studies"}>Case studies</a>
              </li>
              <li>
                <a href={homepageURL + "about"}>About</a>
              </li>
              <li>
                <a href={homepageURL + "demo"}>Get a demo</a>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
}
