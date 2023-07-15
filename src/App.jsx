import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Support from './components/Support/Support'
import Lounge from './components/Lounge/Lounge'
import Info from './components/Info/Info'
import Traveler from './components/Travelers/Traveler'
import Footer from './components/Footer/Footer'
import Subscribe from './components/Subsribers/Subscribe'

function App() {

  return (
    <div>
    <Navbar/>
    <Home/>
   <Search/>
    <Support/>
    <Info/>
    <Lounge/>
    <Traveler/>
    <Subscribe/>
    <Footer/> 
    </div>
  )
}

export default App
