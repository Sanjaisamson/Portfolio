import '../styles/about.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const About = () =>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

    const revealElement = document.querySelector('.reveal') as HTMLElement;

    function revealOnScroll() {
      if (revealElement) {
        const scrollPosition = window.scrollY;
        const revealPosition = revealElement.offsetTop + (revealElement.offsetHeight / 2);

        if (scrollPosition > revealPosition) {
          revealElement.classList.add('active');
          window.removeEventListener('scroll', revealOnScroll);
        }
      }
    }

    window.addEventListener('scroll', revealOnScroll);

    return(
        <div className="aboutContainer">
            <div className='about_glass_box'>
                <section className="reveal">
                    <h2>About Me</h2>
                     <p>
                        Hi, I am Sanjai Samson, As a passionate software engineer and web developer hailing from Kerala, I bring a diverse skillset honed through my Master's in Computer Applications and extensive project experience. With a profound interest in backend engineering, I have crafted numerous applications and websites, leveraging my proficiency in cutting-edge technologies.  
                        </p>
                        <p>
                        My expertise extends beyond traditional web development, encompassing the realm of Internet of Things (IoT), where I have contributed to innovative projects that blend hardware and software seamlessly.  
                        </p>
                        <p>
                        Driven by a relentless pursuit of excellence, I continuously seek to expand my knowledge and stay at the forefront of emerging trends, ensuring that my work not only meets but exceeds the highest industry standards.
                        </p>
                        <div className='button-div'>
                  <Link to="/projects">
                  <button className="buttons"><span>View Projects</span></button>
                  </Link>
                    </div>
                </section>
                </div>
        </div>
    )
}