import React from 'react'
import './App.css';
import Navigation from './components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Auth/Login';
import ToDos from './components/ToDos/ToDos';
import Categories from './components/Categories/Categories';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer';
import AuthProvider from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation />
          <Routes>
            <Route path='/' element={<Login />}/>  
            <Route path='login' element={<Login />}/>  
            <Route path='todos' element={<ToDos />}/>  
            <Route path='categories' element={<ProtectedRoute><Categories /> </ProtectedRoute>}/>  
            <Route path='about' element={<About />}/>  
            <Route path='*' element={<NotFound />}/>  
          </Routes>
      <Footer/>
      </Router>
      </AuthProvider>
    </div>
  )
}

export default App;
