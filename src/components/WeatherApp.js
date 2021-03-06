import './SeasonDisplay.css';
import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class WeatherApp extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner loadingText="Waiting for location...." />;
  }

  render() {
    return this.renderContent();
  }
}

export default WeatherApp;
