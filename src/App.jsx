
import './App.css'
// import Navbar from './components/DaisyNavbar/Navbar'
import Nav from './components/Navbar/Nav'
import PriceOptions from './components/PriceOptions/PriceOptions'



function App() {

  return (
    <>
      {/* <Navbar></Navbar> */}

      <Nav></Nav>  
      
      <h1 className='text-4xl bg-red-700'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      
    </>
  )
}

export default App
