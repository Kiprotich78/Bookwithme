//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import HomeScreen from './screens/Homescreen';
import BookingScreen from './screens/BookingScreen';
import Register from './screens/Register';
import Login from './screens/Login';
import { useState } from 'react';

function App() {
  const [room, setRoom] = useState({});

  return (
    <div className="App">
      

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<HomeScreen setRoom={setRoom}/>} />
          
          

          <Route path='/home/book' element={<BookingScreen room={room}/>}/>
          <Route path='/' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
