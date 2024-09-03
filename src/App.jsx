import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import PriceScetion from './components/PriceScetion/PriceScetion'
import Rechart from './components/Rechart/Rechart';

function App() {

  return (
    <>
    <section className='flex flex-col h-screen'>
    <Navbar />
    <HeroSection></HeroSection>
    </section>
    <PriceScetion></PriceScetion>
  <Rechart></Rechart>
 
    </>
  )
}

export default App
