import React from 'react';
import '../assets/sass/side-left.scss';

class SideLeft extends React.Component {
  render() {
    return (
      <section className='col-3 side-left'>
        <div className='current-balance'>
          <span>Rp. 4.500.000</span>
          <span>Current Balance</span>
        </div>
      </section>
    );
  }
}

export default SideLeft;
