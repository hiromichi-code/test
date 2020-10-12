import React from 'react';
import './App.scss';
import image from './images/image.png';
import Button from './components/Button';
import Footer from './components/Footer';

const App = () => {
  return(
    <div className="title">
      <h1>Shinohara BookBinding inc.</h1>
      <p>Fukuoka.Japan</p>
      <img src={image} alt='imagePicture'></img>
      <div className="btn">
        <Button />
      </div>
        <Footer />
    </div>
  );
}

export default App; 