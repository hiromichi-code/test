import React from 'react';
import './App.scss';
import image from './images/image.svg';
import Button from './components/Button';
import Footer from './components/Footer';

const App = () => {
  return(
    <div className="title">
      <h1>Mentsuke</h1>
      <h2>Shinohara BookBinding inc.</h2>
      <p>Fukuoka.Japan</p>
      <div className="btn">
        <Button />
      </div>
      <img src={image} alt='imagePicture'></img>
      <Footer />
    </div>
  );
}

export default App; 