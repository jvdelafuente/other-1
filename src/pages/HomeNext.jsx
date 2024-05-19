/* eslint-disable react/no-unescaped-entities */
import "../styles/homenext.css";
import Atropos from "atropos/react";


export default function HomeNext() {
  return (
    <div id="next-container" className="next-big-container">
        <a href="#home-container" ><svg className="next-svg" fill="#333333" height="256px" width="256px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve" stroke="#333333"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> </g></svg></a>
      <div className="next-container">
        <a href="#projectContainer"><Atropos
        className="card-atropos"
        activeOffset={40}
        shadowScale={1.05}
        >
        <div data-atropos-offset="3" id="next-card" className="next-card2">
          <h2 className='next-h2' data-atropos-offset="-3">Projects</h2>
          <p>Embrace the art of living well through our curated collection of interior design projects. Let us guide you on a journey of transformation, where your dreams for a truly exceptional living space become a reality.</p>
        </div>
        </Atropos></a>   
        <a href="#aboutContainer"><Atropos
        className="card-atropos"
        activeOffset={40}
        shadowScale={1.05}
        >
        <div data-atropos-offset="3" id="next-card" className="next-card1">
          <h2 className='next-h2' data-atropos-offset="-3">About us</h2>
          <p>We specialize in crafting unique, personalized solutions for all your real estate needs. With extensive experience designing hotels, villas, and apartments across Europe, we bring your vision to life.</p>
        </div>
        </Atropos></a>
        <a href="#contactContainer"><Atropos
        className="card-atropos"
        activeOffset={40}
        shadowScale={1.05}
        >
        <div data-atropos-offset="3" id="next-card" className="next-card3">
          <h2 className='next-h2' data-atropos-offset="-3">Contact</h2>
          <p>Embark on your design journey today. Contact us to schedule a consultation and let's discuss how we can bring your vision to life.</p>
        </div>
        </Atropos></a>
      </div>
    </div>
  );
}
