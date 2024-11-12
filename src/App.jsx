//import React from 'react'
import Router from './shared/Router'
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
    <Router/>
    <ToastContainer/>
    </Provider>
  )
}

export default App;