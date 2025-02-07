import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
   <header className="fixed ml-auto content-center bg-gray-600 p-3">
  <nav className="bg-gray-600 text-2xl text-cyan-400  flex items-center  ">
  {/*<img className=" w-12 ml-10" src="/src/assets/e.png" alt="Image description" />*/}
    <ul className="flex gap-10 pr-10">
      <li>
        <a href="#welcome-section" className="hover:text-cyan-200 border-cyan-400">HOME</a>
      </li>
      <li>
      <a href="#about-me" className="hover:text-cyan-200 ">ABOUT ME</a>
      </li>
      <li>
      <a href="#projects" className="hover:text-cyan-200 ">PROJECTS</a>
      </li>
    </ul>
  </nav>
</header>


  
  <section class="w-full h-screen bg-amber-200 text-center" id="welcome-section">
    <h1>
      HI I AM JOHN EMMANUEL and I AM A GRAPHIC ARTIST and <br /> FRONTEND DEVELOPER
    </h1>
  </section>

  
  <section class="w-full h-screen bg-blue-900 text-center" id="about-me">
    <h1>
      HI I AM JOHN EMMANUEL and I AM A GRAPHIC ARTIST and <br /> FRONTEND DEVELOPER
    </h1>
  </section>


  <section class="w-full h-screen bg-amber-200 text-center" id="projects">
    <h1>
      HI I AM JOHN EMMANUEL and I AM A GRAPHIC ARTIST and <br /> FRONTEND DEVELOPER
    </h1>
  </section>

  


    </>
  )
}

export default App
