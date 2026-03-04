import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import "./App.css"
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import BooksPage from './stores/pages/BooksPage'
import ComputerPage from './stores/pages/ComputerPage'
import FurniturePage from './stores/pages/FurniturePage'
import FridgePage from './stores/pages/FridgePage'
import MenPage from './stores/pages/MenPage'
import WomenPage from './stores/pages/WomenPage'
import ProDataPage from './stores/pages/ProDataPage'
import KitchenPage from './stores/pages/KitchenPage'
import TvPage from './stores/pages/TvPage'
import WatchPage from './stores/pages/WatchPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import MobileSingle from './stores/singles/MobileSingle'
import AcSingle from './stores/singles/AcSingle'
import BooksSingle from './stores/singles/BooksSingle'
import ComputerSingle from './stores/singles/ComputerSingle'
import FridgeSingle from './stores/singles/FridgeSingle'
import FurnitureSingle from './stores/singles/FurnitureSingle'
import KitchenSingle from './stores/singles/KitchenSingle'
import MenSingle from './stores/singles/MenSingle'
import WomenSingle from './stores/singles/WomenSingle'
import TvSingle from './stores/singles/TvSingle'
import WatchSingle from './stores/singles/WatchSingle'
import SpeakerSingle from './stores/singles/SpeakerSingle'
import ProDataSingle from './stores/singles/ProDataSingle'
import UserCart from './stores/UserCart'
import SignInPage from './stores/pages/SignInPage'
import SignUpPage from './stores/pages/SignUpPage'
import { useAuth } from './stores/context/AuthContext'


function App() {
  const { currentUser } = useAuth()

  const protect = (element) => (currentUser ? element : <Navigate to="/signin" replace />)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to={currentUser ? '/home' : '/signin'} replace />} />
        <Route path='/signin' element={currentUser ? <Navigate to="/home" replace /> : <SignInPage />} />
        <Route path='/signup' element={currentUser ? <Navigate to="/home" replace /> : <SignUpPage />} />
        <Route path='/home' element={protect(<LandingPage />)} />
        <Route path='/mobiles' element={protect(<MobilePage />)} />
        <Route path='/ac' element={protect(<AcPage />)} />
        <Route path='/books' element={protect(<BooksPage />)} />
        <Route path='/computers' element={protect(<ComputerPage />)} />
        <Route path='/furniture' element={protect(<FurniturePage />)} />
        <Route path='/fridge' element={protect(<FridgePage />)} />
        <Route path='/men' element={protect(<MenPage />)} />
        <Route path='/women' element={protect(<WomenPage />)} />
        <Route path='/kitchen' element={protect(<KitchenPage />)} />
        <Route path='/tv' element={protect(<TvPage />)} />
        <Route path='/watchs' element={protect(<WatchPage />)} />
        <Route path='/promobiles' element={protect(<ProDataPage />)} />
        <Route path='/speakers' element={protect(<SpeakerPage />)} />
        <Route path='/cart' element={protect(<UserCart />)} />
        <Route path='/mobiles/:id' element={protect(<MobileSingle />)} />
        <Route path='/ac/:id' element={protect(<AcSingle />)} />
        <Route path='/books/:id' element={protect(<BooksSingle />)} />
        <Route path='/computers/:id' element={protect(<ComputerSingle />)} />
        <Route path='/furniture/:id' element={protect(<FurnitureSingle />)} />
        <Route path='/fridge/:id' element={protect(<FridgeSingle />)} />
        <Route path='/men/:id' element={protect(<MenSingle />)} />
        <Route path='/women/:id' element={protect(<WomenSingle />)} />
        <Route path='/kitchen/:id' element={protect(<KitchenSingle />)} />
        <Route path='/tv/:id' element={protect(<TvSingle />)} />
        <Route path='/watchs/:id' element={protect(<WatchSingle />)} />
        <Route path='/promobiles/:id' element={protect(<ProDataSingle />)} />
        <Route path='/speakers/:id' element={protect(<SpeakerSingle />)} />
        <Route path='*' element={<Navigate to={currentUser ? '/home' : '/signin'} replace />} />
      </Routes>
    </div>
  )
}

export default App
