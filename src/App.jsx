import { useState, useEffect, useRef } from "react";
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
      {/* Navbar */}
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
            className={`flex flex-col md:flex-row gap-5 text-xl text-cyan-400 font-[poppins] transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden md:flex"}`}
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

     <div className="flex justify-center bg-gray-900 w-full h-screen">
  <section id="welcome-section">
    <div className="w-full h-screen flex flex-col font-[poppins]">

      <div className="flex-1 bg-gray-900 flex items-end md:justify-between justify-center text-center md:text-start px-4 md:px-20 pb-0">
        <div>
          <h1 className="text-2xl md:text-5xl text-cyan-500">
            Hola! <span className="text-xl md:text-3xl">I am </span>
            <strong className="text-2xl md:text-7xl text-cyan-400">John Emmanuel</strong>
            <span className="text-xl md:text-3xl"> and I am a</span>
          </h1>
        </div>

        <div>
          <img
            src="./src/assets/coding.png"
            alt="Coding Illustration"
            className="hidden md:block w-40 md:w-80 drop-shadow-lg shadow-cyan-500 ml-9"
          />
        </div>
      </div>
      
      <div className="flex-1 bg-gray-800 flex md:justify-start justify-center px-4 md:px-20 pt-0">
        <h1 className="text-3xl md:text-7xl text-white">
          {currentText}
        </h1>
      </div>
    </div>
  </section>
</div>






     {/* Projects Section */}
     <section id="projects" className="w-full bg-gray-800 py-20 text-center font-[poppins]">
  <h2 className="text-4xl text-cyan-400 font-bold">Projects</h2>
  <p className="text-white mt-4">Check out some of my latest projects.</p>

  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto font-[poppins]">
    {/* Project Cards */}
    {["One", "Two", "Three", "Four", "Five", "Six"].map((project, index) => (
      <a
        key={index}
        href={`#project-${project}`}
        className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/50 transform hover:scale-105 transition duration-300 cursor-pointer"
      >
        <h3 className="text-xl text-cyan-400 font-bold">Project {project}</h3>
        <p className="text-white mt-2">A brief description of the project.</p>
      </a>
    ))}
  </div>
</section>

{/* Placeholder Sections for Projects */}
{["One", "Two", "Three", "Four", "Five", "Six"].map((project, index) => (
  <section
    key={index}
    id={`project-${project}`}
    className="w-full bg-gray-900 text-white py-10 flex items-center justify-center font-[poppins]"  // Adjusted to have padding
  >
    <div className="text-center max-w-4xl w-full p-6 bg-gray-800 rounded-3xl shadow-xl">
      <h2 className="text-4xl text-cyan-400 font-bold mb-4">Project {project} Content</h2>
      <p className="text-white mt-4 mb-6">
        This is where the content for Project {project} will go. You can add more details about the project here.
      </p>

      {/* Layout Placeholder Box */}
      <div className="w-full h-60 bg-gray-700 rounded-xl mx-auto">
        {/* Placeholder for images or other content */}
        <p className="text-white text-xl text-center pt-24">Project {project} Image/Content</p>
      </div>
    </div>
  </section>
))}



      {/* About Me Section */}
      <section id="about-me" className="w-full  bg-gray-700 py-20 font-[poppins]">
  <div className="max-w-6xl mx-auto px-4 md:flex md:items-center md:gap-10">
    {/* Left Column: About Me Text */}
    <div className="md:flex-1 font-[poppins]">
      <h2 className="text-4xl text-cyan-400 font-bold mb-6">About Me</h2>
      <p className="text-lg md:text-xl font-[poppins] text-white leading-relaxed">
        I'm a <span className="text-cyan-400 font-bold">graphic designer</span> and a{" "}
        <span className="text-cyan-400 font-bold">frontend developer</span> based in the Philippines. <br /><br />
        I love keeping a website <span className="text-cyan-400">simple</span>,{" "}
        <span className="text-cyan-400">clean</span>, but <span className="text-cyan-400">elegant</span> looking. <br /><br />
        When I am not on my keyboard, you'll find me <span className="text-cyan-400">balling</span>,{" "}
        <span className="text-cyan-400">cooking</span>, or working out in the <span className="text-cyan-400">gym</span>.
      </p>
      <div className="flex gap-4 mt-8">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-4xl text-cyan-400 hover:text-white transition-transform transform hover:scale-110"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook text-4xl text-cyan-400 hover:text-white transition-transform transform hover:scale-110"></i>
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-tiktok text-4xl text-cyan-400 hover:text-white transition-transform transform hover:scale-110"></i>
        </a>
      </div>
    </div>

    {/* Right Column: Picture + Resume Download */}
    <div className="md:flex-1 flex flex-col items-center mt-10 md:mt-0 font-[poppins]">
      <img
        src="./src/assets/my-picture.jpg"
        alt="John Emmanuel"
        className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-lg mb-6 transition-transform transform hover:scale-110 hover:rotate-3"
      />
      <a
        href="./src/assets/Bulaon-John-Emmanuel-Resume.pdf"
        download
        className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-cyan-300 transition font-[poppins]"
      >
        Download My Resume
      </a>
    </div>
  </div>

  {/* Contact Form */}
  <div className="max-w-4xl mx-auto mt-16 bg-gray-800 p-8 rounded-lg shadow-lg ">
    <h3 className="text-3xl text-cyan-400 font-bold mb-6 font-[poppins]">Get in Touch</h3>
    <form>
      <div className="mb-4">
        <label className="block text-cyan-400 text-lg mb-2" htmlFor="suggestion">
          Your Suggestion or Message
        </label>
        <textarea
          id="suggestion"
          className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          rows="5"
          placeholder="Write your message here..."
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block text-cyan-400 text-lg mb-2" htmlFor="email">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          placeholder="Enter your email"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-cyan-300 transition"
      >
        Submit
      </button>
    </form>
  </div>
</section>



      {/* Footer */}
      <footer className=" bg-gray-700 text-center text-cyan-400 py-6">
        <p>© 2025 John Emmanuel. All rights reserved.</p>
      </footer>



    </>
  );
}

export default App;
