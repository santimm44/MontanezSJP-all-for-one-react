import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddingTwoNumbers from './components/pages/AddingTwoNumbers.jsx'
import AskingQuestions from './components/pages/AskingQuestions.jsx'

import GreaterThanOrLessThan from './components/pages/GreaterThanOrLessThan.jsx'
import Magic8Ball from './components/pages/Magic8Ball.jsx'
import HelloWorld from './components/pages/HelloWorld.jsx'
import Madlib from './components/pages/Madlib.jsx'
import OddOrEven from './components/pages/OddOrEven.jsx'
import ResestaurantPicker from './components/pages/RestaurantPicker.jsx'
import ReverseItAlphanumeric from './components/pages/ReverseItAlphanumeric.jsx'
import ReverseItNumbersOnly from './components/pages/ReverseItNumbersOnly.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/AddingTwoNumbers' element={<AddingTwoNumbers />} />
        <Route path='/AskingQuestions' element={<AskingQuestions />} />
        <Route path='/GreaterThanOrLessThan' element={<GreaterThanOrLessThan />} />
        <Route path='/Magic8Ball' element={<Magic8Ball />} />
        <Route path='/HelloWorld' element={<HelloWorld />} />
        <Route path='/Madlib' element={<Madlib />} />
        <Route path='/OddOrEven' element={<OddOrEven />} />
        <Route path='/RestaurantPicker' element={<ResestaurantPicker />} />
        <Route path='/ReverseItAlphanumeric' element={<ReverseItAlphanumeric />} />
        <Route path='/ReverseItNumberOnly' element={<ReverseItNumbersOnly />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
