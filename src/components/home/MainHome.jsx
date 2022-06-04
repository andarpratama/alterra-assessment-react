import React from 'react';
import '../../assets/sass/home.scss';
import CardDashboard from './CardDashboard';

class MainHome extends React.Component {
  render() {
    return (
      <section className='col-7 main'>
        <div className='row'>
          <CardDashboard
            title='Budget'
            value={1000000}
            desc='Naik dari bulan sebelumnya'
          />
          <CardDashboard
            title='Outcome'
            value={2000000}
            desc='Naik dari bulan sebelumnya'
          />
          <CardDashboard
            title='Income'
            value={3000000}
            desc='Naik dari bulan sebelumnya'
          />
          <CardDashboard
            title='Reminder'
            value={4000000}
            desc='Naik dari bulan sebelumnya'
          />
        </div>
      </section>
    );
  }
}

export default MainHome;
