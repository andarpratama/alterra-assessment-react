import React from 'react';
import '../assets/sass/side-right.scss';

class SideRight extends React.Component {
  render() {
    return (
      <section className='col-2 side-right'>
        <div className='profile'>
          <img src={require('../assets/images/andar.png')} alt='Profile' />
          <h2>Andar Pratama</h2>
          <span>andar.webdev@gmail.com</span>
        </div>

        <div className='history'>
          <h2>History</h2>
        </div>
      </section>
    );
  }
}

export default SideRight;
