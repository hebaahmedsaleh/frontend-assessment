import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>Otida &#39; s frontend assessment</h1>
      <nav>
        <ul>
          <li>
            <h2>
              <Link to='/task-1'>Task-1</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to='/task-2'>Task-2</Link>
            </h2>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
