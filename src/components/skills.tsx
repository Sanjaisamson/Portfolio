import '../styles/skills.css'
import { useEffect } from 'react';
import Card from './skillsCard';
import javascriptLogo from '../assets/images/javascript-logo-png.webp'
import HTML_Logo from '../assets/images/html-5-icon.png'
import CSS_logo from '../assets/images/CSS3_logo.svg.png'
import node_logo from '../assets/images/Node.js_logo.svg.png'
import react_logo from '../assets/images/React-icon.svg.png'
import react_native_logo from '../assets/images/react-native-logo.svg'
import typescript_logo from '../assets/images/typescript.svg'
import git_logo from '../assets/images/Git_icon.svg.png'

export const Skills = () =>{

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectCardData = [
    {
      name: "HTML",
      logo: HTML_Logo
    },
    {
      name: "CSS",
      logo: CSS_logo
    },
    {
      name: "JAVASCRIPT",
      logo: javascriptLogo
    },
    {
      name: "REACT",
      logo: react_logo
    },
    {
      name: "REACT-Native",
      logo: react_native_logo
    },
    {
      name: "NODE JS",
      logo: node_logo
    },
    {
      name: "TYPESCRIPT",
      logo: typescript_logo
    },
    {
      name: "GIT",
      logo: git_logo
    },
  ]

    return(
        <div className="skillsContainer">
      <div className='skills_glass_box'>
        <div>
          <h1 style={{color:"white", fontFamily:"sans-serif", fontSize:80}}>Skills</h1>
        </div>
        <div className='skills_glass_box_cards'>
        {projectCardData.map((card, index) => (
        <Card 
          key={index} name={card.name} logo={card.logo}/>
        ))}
      </div>
      </div>
    </div>
    )
}