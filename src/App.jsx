import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
   <header className=''>
  <nav className="bg-gray-600 text-2xl text-cyan-400 p-2 flex items-center ">
  <img className=" w-12 " src="/src/assets/e.png" alt="Image description" />
    <ul className="">
      <li>
        <a href="#welcome-section" className="hover:text-cyan-200 border-cyan-400 ">HOME</a>
        <select className="appearance-none ">
          <option><a href='#about-me'>ABOUT  ME</a></option>
          <option>EDUCATION</option>
          <option>GOAL</option>
        
        </select>
        <a href="#welcome-section" className="hover:text-white mx-4">PROJECT</a>
      </li>
    </ul>
  </nav>
</header>



<main>
  <section id="welcome-section">
    
  </section>
  <section id="about-me">
    
  </section>
</main>

    </>
  )
}

export default App
