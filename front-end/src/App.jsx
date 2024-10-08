import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Footer from './components/Footer/Footer';
import ProtectedRoute from './Redux/protectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login"
          element={
            <ProtectedRoute isProtected={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route path="/profile"
          element={
            <ProtectedRoute isProtected={true}>
              <Profile />
            </ProtectedRoute>
          } />
      </Routes>

      <Footer />
    </BrowserRouter >
  );
}

export default App;
