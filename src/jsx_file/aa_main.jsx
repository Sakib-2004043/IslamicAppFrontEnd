import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import '../css_file/aa_main.css'
import '../css_file/homePage.css'
import '../css_file/jikirTracker.css'
import '../css_file/registration.css'
import '../css_file/logIn.css'
import '../css_file/menuBar.css'
import '../css_file/zakatCalculator.css'
import '../css_file/zz_test.css';
import '../css_file/footer.css';
import '../css_file/salatSaver.css'
import '../css_file/aa_responsive.css'

import HomePage from './homePage.jsx'
import JikirTracker from './jikirTracker.jsx'
import RegistrationPage from './registrationPage.jsx'
import Test from './zz_test.jsx'
import LoginPage from './logInPage.jsx'
import ZakatCalculator from './zakatCalculator.jsx'
import Footer from './footer.jsx'
import SalatSaver from './salatSaver.jsx'

export default function Main(){



  return(<>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/jikirTracker" element={<JikirTracker/>}></Route>
        <Route path="/logIn" element={<LoginPage/>}></Route>
        <Route path="/registration" element={<RegistrationPage/>}></Route>
        <Route path="/zakatCalculator" element={<ZakatCalculator/>}></Route>
        <Route path="/salatSaver" element={<SalatSaver/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>)
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);
