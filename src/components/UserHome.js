import React from 'react';
import Route from './Route';
import Header from './Header';
import ImageSearchApp from './ImageSearchApp';
import WikiApp from './WikiApp';

const UserHome = () => {
  return (
    <div>
      <Header />
      <ImageSearchApp />
      {/* <Route path="/images">
        <ImageSearchApp />
      </Route>
      <Route path="/youtube">
        <YouTubeApp />
      </Route>
      <Route path="/wiki">
        <WikiApp />
      </Route>
      <Route path="/weather">
        <WeatherApp />
      </Route>
      <Route path="/translate">
        <TranslateApp />
      </Route>
      <Route path="/blog">
        <BlogApp />
      </Route> */}
    </div>
  );
};

export default UserHome;
