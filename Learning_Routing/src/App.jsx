import { useState } from 'react'
import {Link} from "react-router-dom"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>This is home page</h1>
    <Link href="About" >About</Link>
    </>
  )
}

export default App
