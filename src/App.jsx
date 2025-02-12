import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const textOptions = [
    "Creative Artist.",
    "Computer Engineer.",
    "Video Editor.",
    "Front-End Developer.",
    "Future Shore 360 Employee.",
  ];
  
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < textOptions[textIndex].length) {
        setCurrentText((prev) => prev + textOptions[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === textOptions[textIndex].length) {
        setTimeout(() => setIsDeleting(true), 200);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % textOptions.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);


  
  return (
    <>
     
      <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg p-3 z-50">
        <nav className="flex flex-col items-center max-w-6xl mx-auto px-4 md:flex-row text-center">
          
          <div className="md:hidden w-full flex justify-end">
            <button
              className="text-cyan-400 focus:outline-none text-2xl"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              ☰
            </button>
          </div>
       
          <ul
            className={`flex flex-col md:flex-row gap-5 text-xl text-cyan-400 transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden md:flex"}`}
          >
            <li>
              <a
                href="#welcome-section"
                className="hover:text-cyan-100 transition-all duration-300 hover:text-3xl"
              >
                HOME
              </a>
            </li>
            <li className="hidden md:block">|</li>
            <li>
              <a
                href="#projects"
                className="hover:text-cyan-100 transition-all duration-300 hover:text-3xl"
              >
                PROJECTS
              </a>
            </li>
            <li className="hidden md:block">|</li>
            <li>
              <a
                href="#about-me"
                className="hover:text-cyan-100 transition-all duration-300 hover:text-3xl"
              >
                ABOUT ME
              </a>
            </li>
          </ul>
        </nav>
      </header>

      
      <section
  className="w-full h-screen bg-gray-900 flex flex-col md:flex-row items-center justify-center text-start px-4 md:px-20"
  id="welcome-section"
>
  
  <div className="flex-1">
    <h1 className="text-4xl md:text-6xl text-cyan-400 font-quicksand mb-4">
      I am <strong>John Emmanuel</strong>
    </h1>
    <h1 className="text-4xl md:text-6xl text-cyan-400 font-quicksand mb-4">
      and I am a{" "}
      <span className="text-5xl md:text-6xl font-bold text-white">
        {currentText}
      </span>
    </h1>
  </div>

  
  <div className="flex-1 flex justify-center">
  <a
                href="#about-me"
                className="hover:text-cyan-100 transition-all duration-300 hover:text-3xl"
              > <img
              src="./src/assets/my-picture.jpg" 
              alt="John Emmanuel"
              className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-lg hover:scale-150"
            /></a>
    
  </div>
</section>
     
      <section id="projects" className="w-full bg-gray-800 py-20 text-center">
        <h2 className="text-4xl text-cyan-400 font-bold">Projects</h2>
        <p className="text-white mt-4">Check out some of my latest projects.</p>

        
  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto">
   
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105 transition duration-300">
      <h3 className="text-xl text-cyan-400 font-bold">Project One</h3>
      <p className="text-white mt-2">A brief description of the project.</p>
    </div>

   
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105 transition duration-300">
      <h3 className="text-xl text-cyan-400 font-bold">Project Two</h3>
      <p className="text-white mt-2">A brief description of the project.</p>
    </div>

    
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105 transition duration-300">
      <h3 className="text-xl text-cyan-400 font-bold">Project Three</h3>
      <p className="text-white mt-2">A brief description of the project.</p>
    </div>

    
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105 transition duration-300">
      <h3 className="text-xl text-cyan-400 font-bold">Project Four</h3>
      <p className="text-white mt-2">A brief description of the project.</p>
    </div>

    
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105 transition duration-300">
      <h3 className="text-xl text-cyan-400 font-bold">Project Five</h3>
      <p className="text-white mt-2">A brief description of the project.</p>
    </div>

   
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105 transition duration-300">
      <h3 className="text-xl text-cyan-400 font-bold">Project Six</h3>
      <p className="text-white mt-2">A brief description of the project.</p>
    </div>
  </div>
      </section>

     
      <section id="about-me" className="w-full bg-gray-900 py-20 text-center">
        <h2 className="text-4xl text-cyan-400 font-bold">About Me</h2>
        <p className="text-white mt-4">I am passionate about development and design.</p>
      </section>
    </>
  );
}

export default App;




















