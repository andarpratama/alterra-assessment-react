import React from 'react';
import '../assets/sass/budget.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MainBudget from '../components/budget/MainBudget';

class Budget extends React.Component {
  render() {
    return <MainBudget />;
  }
}

export default Budget;
