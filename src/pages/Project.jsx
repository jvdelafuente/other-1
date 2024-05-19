import '../styles/project.css'
import PanoramicImg from "../components/360Img";

export default function Project() {
  return (
    <div className="project-big-container">
      <div id='projectContainer'  className="panoramic-container">
      <h2>Project example</h2>
        <PanoramicImg />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam itaque, voluptates asperiores pariatur at dolore excepturi dicta vero, nemo labore explicabo facere modi quis praesentium dolorum tempora exercitationem doloribus!
      Rerum.</p>
      </div>
    </div>
  )
}
