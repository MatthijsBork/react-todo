import RoutedComponent from './router/Router';
import Header from './components/Header';
import React from 'react';
import './app.css';

function App() {
  return (
    <div className="">
      <Header />
      <RoutedComponent />
    </div>
  );
}

export default App;
