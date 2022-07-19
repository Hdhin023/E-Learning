import React from "react"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.3058465!2d85.-79.4320939!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>Send your feedback here</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>14 Crescent, Kitchener, N2A 9M5</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> abc@site.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 999 4444 3333</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Write down your feedback here
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>
            <div className='left row'>
                <iframe title="Map" src={map}></iframe>
            </div>
            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
