import { useState } from 'react'
import './App.css'
import ProductsList from './ProductCard.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ProductsList />
  )
}

export default App