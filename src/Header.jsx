import React from 'react'

const Header = () => (
  <header className="site-header">
    <div className="nav-container">
      <div className="logo">MyPortfolio</div>
      <nav>
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header 