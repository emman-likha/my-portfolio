import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
   <html class="scroll-smooth h-screen">
   <header className="flex justify-center ">
   <div className="fixed flex items-center  mt-3 bg-gray-950 opacity-30 hover:opacity-100  border-3 rounded-full font-[Quicksand] hover:border-x-5 hover:shadow-md hover:shadow-cyan-300/50 shadow-lg  hover:border-cyan-300 ease-in-out ">
  <nav className=" text-xl px-6 py-2  text-cyan-400 flex items-center hover:mx-3 transition-all duration-700 hover:drop-shadow-lg ">
  {/*<img className=" w-12 ml-10" src="/src/assets/e.png" alt="Image description" />
  <img src="src/assets/arrow.png" class=""  alt="" />*/}
  
    <ul className="flex gap-5 static ">
      <li>
        <a href="#welcome-section" className="  hover:text-cyan-100 hover:ml-3.5 transition-all duration-300 hover:text-3xl hover:static ">HOME</a>
      </li>
      <li>|</li>
      <li>
      <a href="#projects" className="border-cyan-400 hover:text-cyan-100 hover:ml-3.5 transition-all duration-300 hover:text-3xl hover:static">PROJECTS</a>
      </li>
     
      <li>|</li>
      <li>
      <a href="#about-me" className="border-cyan-400 hover:text-cyan-100 hover:ml-3.5 transition-all duration-300 hover:text-3xl hover:static">ABOUT ME</a>
      </li>
    </ul>
  </nav>
</div>
   


   </header>

  
  <section class="w-full h-screen bg-gray-900  flex justify-center items-center flex-col" id="welcome-section ">
    <h1 class="mb-20 -mt-10 text-cyan-400 flex flex-col items-center text-4xl gap-3 font-[Quicksand]">WELCOME TO MY <span class="text-9xl font-[Quicksand] font-black">PORTFOLIO</span></h1>
    <div class="flex flex-row gap-30 bg-cyan-950 opacity">

      <div class=" w-3xl h-96 rounded-2xl text-amber-50">
       <div class="pl-3">
        <h1 class="text-5xl">I am a Programmer</h1>
        <h1 class="text-5xl">I am a Creative Artist</h1>
        <h1 class="text-5xl">I am a Computer Engineer</h1>
        <h1 class="text-5xl">I am a Content Creator</h1>
        <h1 class="text-5xl">I am a Video Editor</h1>
       </div>
      </div>

      <div class="bg-amber-100 w-3xl h-96 rounded-3xl">

      </div>
      <div clas=""></div>
    </div>
    
  </section>

  <section class="w-full h-screen bg-gray-900 flex justify-center items-center" id="projects">
    <div class="flex flex-row gap-10 items-center">
    <div class="bg-amber-100 w-3xl h-170 rounded-3xl">
        
    </div>
      
    <div class="bg-cyan-600 w-1 h-130 ">

    </div>
        <div class="bg-amber-100 w-3xl h-96 rounded-3xl">

        </div>
    </div>
  </section>

  
  <section class="w-full h-lvh bg-gray-900 flex justify-center items-center" id="about-me">
    <h1>
      HI I AM JOHN EMMANUEL and I AM A GRAPHIC ARTIST and <br /> FRONTEND DEVELOPER
    </h1>
  </section>


  <footer>
    <a href="https://github.com/emman-likha" target="_blank">Github</a>
  </footer>
   </html>

  


    </>
  )
}

export default App
