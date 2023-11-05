import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './Context/AuthContext';
import './App.css';
import Home from './Pages/Home';
import Footer from './Components/website/Footer';
import Navbar from './Components/website/Navbar';
import NotFound from './Components/website/NotFound';
import Account from './Pages/Account';
// import Dashboard from './Components/Admin/pages/Dashboard';
import Settings from './Components/Admin/pages/Settings';
import Tables from './Components/Admin/pages/Tables';
import Maps from './Components/Admin/pages/Maps';
import AccountAdmin from './Components/admin1/AccountAdmin';
// import Dashboard from './Admin/Dashboard';
// import Register from './Pages/Signup';
// import SignIn from './Pages/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <AuthProvider> */}
          <Navbar />
          <div className='h-full'>
          <Routes>
            {/* <Route path='/' element={<Dashboard />} /> */}
            <Route path='/' element={<Home />} />
            {/* <Route path='/signup' element={<Register />} />
            <Route path='/login' element={<SignIn />} /> */}
            <Route path="/account" element={<Account />} />
            <Route path="/admin" element={<AccountAdmin />} />
            <Route path="*" element={<NotFound />} />
            <Route exact path="/settings" element={<Settings/>} />
            <Route exact path="/tables" element={<Tables/>} />
            <Route exact path="/maps" element={<Maps/>} />
            {/* <Redirect from="*" to="/" /> */}
          </Routes>
          </div>
          <Footer />
        {/* </AuthProvider> */}
      </Router>
    </div>
  );
}

export default App;
