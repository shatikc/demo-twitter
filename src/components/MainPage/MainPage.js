// MainPage.js

import React from 'react';
import './MainPage.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import TweetsFeed from '../TweetsFeed/TweetsFeed';
import BottomMainPage from '../BottomMainPage/BottomMainPage';

const MainPage = () => {
  return (
    <div className="main-page">
      <NavigationBar />
      <h1>Welcome to My Twitter Clone!</h1>
      <p>This is a clone of Twitter built with React and Firebase.</p>
      <TweetsFeed />
      <BottomMainPage />
    </div>
  );
}

export default MainPage;
