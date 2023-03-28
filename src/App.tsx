import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import ListMovies from './components/ListMovies'
import NavBar from './components/NavBar'
import {DataResponse} from '../types'



function App() {

  const [result, setResult] = useState<DataResponse>()

  return (
    <>
      <NavBar setResult={setResult} />
      <Hero result={result} />
      <ListMovies result={result} />
    </>
  )
} 

export default App
