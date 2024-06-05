import {useEffect, useRef} from 'react'
import '../styles/contents.css'
import { DownloadIcon, GithubIcon, LucideLinkedin, MailCheckIcon } from 'lucide-react';


function consoleText(words:any, id:any) {
  
  const target = document.getElementById(id);

  if (!target) return; 

  let letterCount = 0;
  let wordIndex = 0;

  const intervalId = setInterval(() => {
    const currentWord = words[wordIndex];

    if (letterCount <= currentWord.length) {
      target.innerHTML = currentWord.substring(0, letterCount);
      letterCount++;
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      letterCount = 0; // Reset letter count for the new word
    }
  }, 220);

  return intervalId; // Return intervalId for cleanup
}

export const Content = () => {

  const consoleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const words = ['Web Developer', 'Software Engineer'];

    const intervalId = consoleText(words, 'text'); 

    return () => {
      clearInterval(intervalId); 
    };
  }, []);
 
  return (
      <div className="contentContainer">
        <div className="animationWrapper">
          <div className='name-container'>
          <div>Hi,</div>
          <div>
              <span>I am Sanjai Samson</span>
          </div>
          <div className='console-container'>
            <span id='text' ref={consoleRef}></span>
            <div className='console-underscore' id='console'>&#95;</div>
          </div>
          <div className='content-description'>
          <p>Hello, I'm a web developer and a software Engineer, specializing in creating modern and responsive websites and Applications.</p>
          </div>
          </div>
          <div>
          <div className='button_div'>
            <div className='resume-button'>
              <a>Resume 
              <DownloadIcon height='20px'/>
              </a>
              </div>
              <div className='linkedin-git-mail-button'>
                <div className='linkedin-git-mail-div'>
                  <a href="https://www.linkedin.com/in/sanjai-samson" target="_blank" rel="noopener noreferrer">
                    <LucideLinkedin className='linkedin-icon' color='white' />
                  </a>
                  <a href="https://github.com/Sanjaisamson" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className='github-icon' color='white' />
                  </a>
                  <a href="mailto:sanjaisamson3225@gmail.com" target="_blank" rel="noopener noreferrer">
                    <MailCheckIcon className='mail-icon' color='white' />
                  </a>
                </div>
              </div>
          </div>
          </div>
          {/* <div className='content_glass_box'>
          <h2>Welcome to My Portfolio</h2>
          <p>Hello, I'm a web developer and a software Engineer specializing in creating modern and responsive websites and Applications.</p>
          <h3>If you are intrested Let's work together</h3>
          <div className='button_div'>
              <button>Resume <DownloadIcon height='20px'/></button>
              <button>
                <div className='linkedin-git-mail-div'>
                  <a href="https://www.linkedin.com/in/sanjai-samson" target="_blank" rel="noopener noreferrer">
                    <LucideLinkedin className='linkedin-icon' color='white' />
                  </a>
                  <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className='github-icon' color='white' />
                  </a>
                  <a href="mailto:your-email@example.com">
                    <MailCheckIcon className='mail-icon' color='white' />
                  </a>
                </div>
              </button>
          </div>
          </div> */}
        </div>
        <div className='content-right-image'>

        </div>
      </div>
  )
}
