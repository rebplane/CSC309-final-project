import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './api/AuthContext'
import AccountPage from './pages/AccountPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/register/' element={<RegisterPage />}></Route>
            <Route path='/login/' element={<LoginPage />}></Route>
            <Route path='/accounts/:tab' element={<AccountPage/>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
