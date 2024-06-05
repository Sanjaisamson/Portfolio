import { NavBar } from './components/navbar'
import { Content } from './components/contents';
import { Skills } from './components/skills'
import { About } from './components/about'
import { Projects } from './components/projects'
import { ContactForm } from './components/contactForm';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="area" >
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
        <div className='pages'>
          <Routes>
            <Route path="/" element={<>
              <NavBar />
              <Content />
              <About />
              <Skills />
              <Projects />
              <ContactForm/>
            </>} />
            <Route path="/about" element={<>
              <NavBar />
              <About />
            </>} />
            <Route path="/skills" element={<>
              <NavBar />
              <Skills />
            </>} />
            <Route path="/projects" element={<>
              <NavBar />
              <Projects />
            </>} />
            <Route path="/footer" element={<>
              <NavBar />
              <ContactForm/>
            </>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App