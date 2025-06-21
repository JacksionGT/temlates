import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0);

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')
    setIsDark(theme === 'dark');
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, []);

  return (
    <div className="p-8 text-center">
      <div className="flex justify-center gap-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]" alt="React logo" />
        </a>
      </div>
      <h1 className="text-5xl font-semibold leading-tight mt-8">Vite + React + TypeScript + SWC + Tailwind CSS</h1>
      <div className="p-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium hover:bg-[#646cff] transition-colors duration-250 bg-secondary text-secondary-foreground"
        >
          count is {count}
        </button>

        <button
          onClick={toggleTheme}
          className="rounded-lg border border-transparent px-5 py-2.5 text-base font-medium transition-colors duration-300 bg-secondary text-secondary-foreground ml-2"
        >
          {
            isDark ? <span>🌙 暗黑</span> : <span>☀️ 亮色</span>
          }
        </button>
        <p className="mt-4">
          Edit <code className="font-mono bg-gray-800/10 rounded px-2 py-1">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500 dark:text-gray-400">
        Click on the Vite and React logos to learn more
      </p>

    </div>
  )
}

export default App
