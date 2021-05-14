import React from 'react';
import Route from './Route';
import Login from './Login';
import Signup from './Signup';
import UserHome from './UserHome';
import ImageSearchApp from './ImageSearchApp';
import YouTubeApp from './YouTubeApp';
import BlogApp from './BlogApp';
import TranslateApp from './TranslateApp';
import WeatherApp from './WeatherApp';
import WikiApp from './WikiApp';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <Route path="/">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/home">
        <Header active="images" />
        <ImageSearchApp />
        {/* <UserHome /> */}
      </Route>
      <Route path="/images">
        <Header active="images" />
        <ImageSearchApp />
      </Route>
      <Route path="/youtube">
        <Header active="youtube" />
        <YouTubeApp />
      </Route>
      <Route path="/wiki">
        <Header active="wiki" />
        <WikiApp />
      </Route>
      <Route path="/weather">
        <Header active="weather" />
        <WeatherApp />
      </Route>
      <Route path="/translate">
        <Header active="translate" />
        <TranslateApp />
      </Route>
      <Route path="/blog">
        <Header active="blog" />
        <BlogApp />
      </Route>
    </div>
  );
};

export default App;
