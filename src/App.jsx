import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
   <header className=''>
  <nav className="bg-gray-600 text-2xl text-cyan-400 p-2 flex items-center">
  <img className="mt-4 mx-auto w-32 sm:w-48 md:w-64 lg:w-80" src="/src/assets/e.png" alt="Image description" />
    <ul className="ml-auto flex space-x-4">
      <li>
        <a href="#welcome-section" className="hover:text-white">Click Me</a>
      </li>
    </ul>
  </nav>
</header>



<main>
  <section id="welcome-section">
    
  </section>
</main>

    </>
  )
}

export default App
