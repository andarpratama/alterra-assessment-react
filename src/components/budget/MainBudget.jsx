// import BudgetTable from './BudgetTable';
import BudgetData from '../../data/budgets.json';
import React from 'react';
import { toRupiah } from '../../services/toRupiah';
import { dateFormater } from '../../services/dateFormater';
import { getData } from '../../services/getData';
import { Modal, Button } from 'react-bootstrap';

class MainBudget extends React.Component {
  constructor() {
    super();
    this.state = {
      BudgetData: BudgetData,
      showModal: false,
    };
  }

  handleShowModal = () => {
    this.setState({
      showModal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleAddBudget = e => {
    getData('budgets');
  };
  render() {
    return (
      <main className='col-7 main budget'>
        <h2 className='budget__title'>Budget</h2>
        <div className='budget__table'>
          <div className='budget__header'>
            <span>Period : Juni 2022</span>
            <button
              className='btn btn-primary'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
              onClick={this.handleShowModal}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                className='bi bi-plus'
                viewBox='0 0 16 16'
              >
                <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
              </svg>
              New
            </button>
            <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title>Add new Budget</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary'>Close</Button>
                <button
                  className='btn btn-primary'
                  onClick={this.handleCloseModal}
                >
                  Save Changes
                </button>
              </Modal.Footer>
            </Modal>
          </div>
          <table className='table table-striped table-hover'>
            <thead>
              <tr>
                <th scope='col'>No</th>
                <th scope='col'>Start Date</th>
                <th scope='col'>End Date</th>
                <th scope='col'>Initial Balance</th>
              </tr>
            </thead>
            <tbody>
              {this.state.BudgetData.map((data, i) => {
                return (
                  <React.Fragment key={data.id}>
                    <tr>
                      <th scope='row'>{++i}</th>
                      {/* <td>{data.start_date}</td> */}
                      <td>{dateFormater(data.start_date)}</td>
                      <td>{data.end_date}</td>
                      <td>{toRupiah(data.initial_balance)}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}

export default MainBudget;
