import React from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-up/sign-in-up.component';
import Header from './components/header/header.component';
import HeaderMobile from './components/header-mobile/header-mobile.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HeaderMobile />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signin" element={<SignInSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
