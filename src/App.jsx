import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
   <html class="scroll-smooth">
   <header className="flex justify-center">
   <div className="fixed flex items-center  mt-5 bg-gray-950 opacity-50 hover:opacity-100  border-gray-500 border-3 rounded-4xl">
  <nav className=" text-2xl p-5 hover:scroll-pt-24 text-cyan-400 flex items-center hover:mx-10 transition-all duration-1000 hover:drop-shadow-lg">
  {/*<img className=" w-12 ml-10" src="/src/assets/e.png" alt="Image description" />*/}
    <ul className="flex gap-15 ">
      <li>
        <a href="#welcome-section" className=" border-cyan-400 hover:bg-cyan-700 hover:text-cyan-100">HOME</a>
      </li>
      <li>
      <a href="#about-me" className="hover:text-cyan-200 ">ABOUT ME</a>
      </li>
      <li>
      <a href="#projects" className="hover:text-cyan-200 ">PROJECTS</a>
      </li>
    </ul>
  </nav>
</div>

   </header>

  
  <section class="w-full h-screen bg-cyan-950  flex justify-center items-center" id="welcome-section">
    <h1 class="flex">
      WECLCOME 
    </h1>
    
  </section>

  
  <section class="w-full h-screen bg-blue-900 flex justify-center items-center" id="about-me">
    <h1>
      HI I AM JOHN EMMANUEL and I AM A GRAPHIC ARTIST and <br /> FRONTEND DEVELOPER
    </h1>
  </section>


  <section class="w-full h-screen bg-amber-200 flex justify-center items-center" id="projects">
    <h1>
      HI I AM JOHN EMMANUEL and I AM A GRAPHIC ARTIST and <br /> FRONTEND DEVELOPER
    </h1>
  </section>
   </html>

  


    </>
  )
}

export default App
