
import '../styles/contactForm.css'

import { Facebook, Home, Instagram, Linkedin, Mail, Phone} from 'lucide-react';

export const ContactForm = () => {

    return (
        <div className='contact-wrapper'>
            <h1 style={{color:"white", fontFamily:"sans-serif", fontSize:80}}>Contact Me</h1>
        <div className="contact-form-container">
            <div className='contact-form'>
        <form action="https://submit-form.com/6Wuu43TIY">
            <div className='form-components'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" required={true} style={{width:300,height:30,border:1, borderRadius:10}} />
            </div>
            <div className='form-components'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required={true} style={{width:300,height:30,border:1, borderRadius:10}} />
            </div>
            <div className='form-components'>
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                placeholder="Message"
                required={true}
                style={{width:300,height:80,border:1, borderRadius:10}}
            ></textarea>
            </div>
            <div className='form-components'>
            <button type="submit" style={{width:250,height:30}}>Send</button>
            </div>
        </form>
        </div>
        <div className='contact-others'>
            <div className='contact-details-group'>
            <div className='contact-email-details'>
                <h1>Contact</h1>
                <div className='contact-details-items'>
                <Mail color='white' style={{width:50}}/>
                <a style={{margin:10, textDecoration:'none', color:'white'}} href="mail:sanjaisamson3225@gmail.com">sanjaisamson3225@gmail.com</a>
                </div>
                <div className='contact-details-items'>
                <Phone color='white' style={{width:50}}/>
                <a style={{margin:10,textDecoration:'none', color:'white'}} href='tel:+91 9400390752'>+91 9400390752</a>
                </div>
            </div>
            <div className='contact-location-details'>
                <h1>Based on</h1>
                <div className='contact-details-items'>
                <Home color='white' style={{width:50,margin:0, padding:0}}/>
                <p>Kollam, Kerala, India</p>
                </div>
            </div>
            </div>
            <div className='contact-icons-group'>
            <div className="contact-icons">
                <a href="https://www.instagram.com/sanjai__samson?igsh=YmtzNGpueXdvd2Fz" target="_blank">
                <Instagram color='white' style={{width:50}}/>
                </a>
            </div>
            <div className='contact-icons'>
                <a>
                <Mail color='white' style={{width:50}}/>
                </a>
            </div>
            <div className='contact-icons'>
                <a href="https://www.facebook.com/sanjai.samson.73?mibextid=ZbWKwL" target="_blank">
                <Facebook color='white' style={{width:50}}/>
                </a>
            </div>
            <div className='contact-icons'>
                <a href="https://www.linkedin.com/in/sanjai-samson" target="_blank">
                <Linkedin color='white' style={{width:50}}/>
                </a>
            </div>
            </div>
        </div>
        </div>
        </div>
    )

}