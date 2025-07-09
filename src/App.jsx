import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './App.css'
import { useState } from 'react'
import picture from './assets/Google_Tasks_2021.png'
import picture2 from './assets/tourist-icon.png'
import picture3 from './assets/plus.png'




function App() {
  const [message, setMessage] = useState("");
  return (
    <>
      <Header />
      <main>
        <section id="home" className="hero-section">
          <div className="hero-content">
            
            <h1>Hello, I'm Nikolay Mihov</h1>
            <p>Programing student | PC Enthusiast</p>
            <a href="#projects" className="cta-btn">View My Work</a>
          </div>
        </section>
        <section id="about" className="about-section">
          <h2>About Me</h2>
          <p>I am a student at the Professional Gymnasium of Telecommunications. I am interested in programming and I am currently learning Node.js, React and JavaScript. I have a passion for computers and I love to build my own PCs and modifing consoles, such as Sony Playstation.</p>
          
        </section>
        <section id="projects" className="projects-section">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src={picture} alt="Project 1" />
              <h3>Project "To-do app"</h3>
              <p>A web app for managing tasks.</p>
              <div className="tech-stack">React, JavaScript, CSS</div>
              <a href="https://jakolai.github.io/To-do-app/" className="project-link">View Project</a>
            </div>
            <div className="project-card">
              <img src={picture2} alt="Project 2" />
              <h3>Project "SeeTheWorld"</h3>
              <p>A site for the tourest.</p>
              <div className="tech-stack">React, JavaScript, CSS</div>
              <a href="https://github.com/fluecs/seetheworld" className="project-link">View Project</a>
            </div>
            <div className="project-card">
              <img src={picture3} alt="Project 3" />
              <h3>More to come!</h3>
              <p>Come later to see more projects!</p>
              
              
            </div>
          </div>
        </section>
        <section id="skills" className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill">
              <span>React</span>
              <div className="skill-bar"><div className="skill-level" style={{width: '15%'}}></div></div>
            </div>
            <div className="skill">
              <span>Node.js</span>
              <div className="skill-bar"><div className="skill-level" style={{width: '10%'}}></div></div>
            </div>
            <div className="skill">
              <span>CSS</span>
              <div className="skill-bar"><div className="skill-level" style={{width: '45%'}}></div></div>
            </div>
            <div className="skill">
              <span>C#</span>
              <div className="skill-bar"><div className="skill-level" style={{width: '70%'}}></div></div>
            </div>
            <div className="skill">
              <span>JavaScript</span>
              <div className="skill-bar"><div className="skill-level" style={{width: '40%'}}></div></div>
            </div>
            <div className="skill">
              <span>SQL</span>
              <div className="skill-bar"><div className="skill-level" style={{width: '70%'}}></div></div>
            </div>
            
          </div>
        </section>
        <section id="contact" className="contact-section">
          <h2>Contact</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea 
              placeholder="Your Message" 
              required 
              maxLength={500}
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></textarea>
            <div style={{ color: '#bdbdbd', fontSize: '0.95em', marginBottom: '0.5rem', textAlign: 'right' }}>
              {message.length} / 500
            </div>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-details">
            <p>Email: nikitomihov@gmail.com</p>
            <p>Location: Sofia, Bulgaria</p>
            <p>Phone number: +359 887 443 111</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
