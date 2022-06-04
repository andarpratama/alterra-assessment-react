import React from 'react';
import { toRupiah } from '../../services/toRupiah';
import { dateFormater } from '../../services/dateFormater';

const BudgetTable = ({ BudgetData }) => {
  return (
    <>
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
          {BudgetData.map((data, i) => {
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
    </>
  );
};

export default BudgetTable;
