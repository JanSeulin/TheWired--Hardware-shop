import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/home/home.component';
import Shop from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-up/sign-in-up.component';

import Header from './components/header/header.component';
import HeaderMobile from './components/header-mobile/header-mobile.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
// import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <HeaderMobile />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/signin" element={<SignInSignUp />} /> */}
          <Route
            exact
            path="/signin"
            element={
              this.props.currentUser ? <Navigate to="/" /> : <SignInSignUp />
            }
          />
        </Routes>
        {/* {this.props.currentUser && <Navigate to="/" />} */}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
