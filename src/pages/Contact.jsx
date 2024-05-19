import '../styles/contact.css'



export default function Contact() {

  return (
    <div className="contact-big-container">
      
      <div id='contactContainer' className="contact-container">
        <h1>Contact</h1>
        <div className="contact-content-container">
      <div className="contact-p-container">
      <p><span>e-mail: </span> placeholder@holder.com</p>
            <p><span>phone: </span>+68 668 68 68 68</p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6390.082115291889!2d-3.70406909062736!3d36.79356597572039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1716111284406!5m2!1ses!2ses" width="750" height="300" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="contact-div-justify"></div>
      </div>
      </div>
    </div>
  )
}