import '../styles/about.css'
import schematic from '../assets/no-bg.png'


export default function About() {

  return (
    <div className="about-big-container">
      
      <div id='aboutContainer' className="about-container">
        <h1>About</h1>
      <div className="about-p-container">
      <p><span>Desing</span> ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam itaque, voluptates asperiores pariatur at dolore excepturi dicta vero</p>
      <img className='about-img' src={schematic} alt="" />
      <p><span>Efficiency</span> ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam itaque, voluptates asperiores pariatur at dolore excepturi dicta vero</p>
      </div>
      </div>
    </div>
  )
}