import './App.css'
import DarkMode from './componentes/darkMode'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <>
      <ThemeProvider>
        
      <div className='flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 dark:text-white'>
        <h1 className='text-3xl font-bold mb-3'>Tailwind Dark Mode</h1>
        <p>Haz clic para cambiar al Dark Mode</p>

        <div className='mt-5'>
          <DarkMode></DarkMode>
        </div>
      </div>

      </ThemeProvider>
    </>
  )
}

export default App
