import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Home from './Components/Home/Home'
import Search from './Components/Search/Search'
import Subscribers from './Components/Subscribers/Subscribers'
import Travelers from './Components/Travelers/Travelers'
import Lounge from './Components/Lounge/Lounge'
import Info from './Components/Info/Info'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
       <Search/>
      {/*<Subscribers/>
      <Search/>
      <Travelers/>
      <Lounge/>
      <Info/>
      <Footer/> */}
    </div>
  )
}

export default App