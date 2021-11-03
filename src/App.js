import React from 'react';
// Routing
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';

//Context
import UserProvider from './context';

//styles
import {GlobalStyle} from './GlobalStyles'
import BuyMovie from './components/BuyMovie';

const App = () => ( 
    <Router>
      <UserProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/:movieId' element={<Movie/>}/>
          <Route path='/*' element={<NotFound/>}/>
          <Route path='/:movieId/buy' element={<BuyMovie/>}/>
        </Routes>
        <GlobalStyle/>
      </UserProvider>
    </Router>

)
export default App;
