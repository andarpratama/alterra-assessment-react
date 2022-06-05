import React from 'react';
import '../assets/sass/side-right.scss';

class SideRight extends React.Component {
  render() {
    return (
      <section className='col-12 col-lg-2 p-0 m-0 side-right '>
        <button className='side-right__toogle'>+</button>
        <h2>SideRight</h2>
      </section>
    );
  }
}

export default SideRight;
