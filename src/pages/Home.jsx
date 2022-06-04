import React from 'react';
import '../assets/sass/home.scss';
import MainHome from '../components/home/MainHome';

class Home extends React.Component {
  componentDidMount() {
    document.title = 'Budget Planer App';
  }
  render() {
    return (
      // <>
      <MainHome />
      // </>
    );
  }
}

export default Home;
