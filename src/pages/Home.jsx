import React from 'react';
import '../assets/sass/home.scss';
import Main from '../components/Main';
import SideLeft from '../layouts/SideLeft';
import SideRight from '../layouts/SideRight';

class Home extends React.Component {
  render() {
    return (
      <main className='home'>
        <div className='row'>
          <SideLeft />
          <Main />
          <SideRight />
        </div>
      </main>
    );
  }
}

export default Home;
