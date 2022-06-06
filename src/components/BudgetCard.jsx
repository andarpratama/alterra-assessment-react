import { toRupiah } from '../services/toRupiah';
import { generateProgressBar } from '../services/generateProgressBar';
import { ProgressBar } from 'react-bootstrap';
import '../assets/scss/components/budget-card.scss';

const BudgetCard = ({ name, amount, max }) => {
  return (
    <div className='col-md-6 col-12'>
      <div className='card'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-end mb-3'>
            <h2 className='h3 card-title m-0'>{name}</h2>
            <div>
              <span className='h4'>{toRupiah(amount)}</span>
              <span className='mx-2'>/</span>
              <span className='fs-6'>{toRupiah(max)}</span>
            </div>
          </div>
          <ProgressBar
            style={{ borderRadius: 0 }}
            variant={generateProgressBar(amount, max)}
            min={0}
            max={max}
            now={amount}
          />

          <div className='mt-3 d-flex justify-content-end mt-4'>
            <button className='btn btn-secondary me-2 py-2'>Add Expense</button>
            <button className='btn btn-outline-primary'>View Expense</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
