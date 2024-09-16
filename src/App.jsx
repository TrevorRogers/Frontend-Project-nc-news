import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Articles from './components/Articles'
import Footer from './components/Footer'



function App() {


  return (
    <>
    <Header>
      <NavBar />
    </Header >
    <Routes>
      <Route path="/" element={<Articles />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
