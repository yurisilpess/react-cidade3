import Nav from './components/Nav'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
    <Nav/>
    {/* CALLING ALLTHE CHILD ELEMENTS*/}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
