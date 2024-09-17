import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Articles from './components/Articles'
import Footer from './components/Footer'
import ArticlesById from './components/ArticlesById'
import { useState } from 'react'





function App() {

  const [articles, setArticles] = useState([])

  return (
    <>
    <Header>
      <NavBar />
    </Header >
    <Routes>
      <Route path="/" element={<Articles articles={articles} setArticles={setArticles}/>} />
      <Route path="/article/:article_id" element={<ArticlesById articles={articles} setArticles={setArticles} />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
