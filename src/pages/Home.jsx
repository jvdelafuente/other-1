/* eslint-disable react/no-unescaped-entities */
import "../styles/home.css";
import About from "./About";
import Contact from "./Contact";
import HomeNext from "./HomeNext";
import Project from "./Project";
import TransitionBg from "./TransitionBg";
export default function Home() {


  return (
  <>
    <div id="home-container" className="home-big-container">
      <div className="home-container">
        <div className="home-h1-big-container">
          <div data-atropos-offset="5"className="home-h1-container">
            <h1  className="h1-the">The</h1>
            <h1 className="h1-dreamer">Dreamer's</h1>
            <h1 className="h1-den">Den</h1>
          </div>

        </div>
      </div>
      <a className="home-svg" href="#contactContainer" ><svg fill="#333333" height="256px" width="256px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve" stroke="#333333"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg></a>
    </div>
    <HomeNext />
    <Project />
    <TransitionBg />
    <About />
    <Contact />
    </>
  );
}
