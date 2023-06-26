import { useState } from 'preact/hooks'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="-font-sans -text-red-600">🍪 Leckerli</h1>
      <div class="-bg-amber-300">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}
