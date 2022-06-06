import { toRupiah } from '../services/toRupiah';
import { generateProgressBar } from '../services/generateProgressBar';
import { ProgressBar } from 'react-bootstrap';
import '../assets/scss/components/budget-card.scss';

const BudgetCard = ({
  name,
  amount,
  max,
  onAddExpenseClick,
  onViewExpenseClick,
}) => {
  return (
    <div className='col-lg-6 col-12 mb-4'>
      <div className='card'>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-end mb-3'>
            <h2 className='h3 card-title m-0'>{name}</h2>
            <div>
              <span className='h4 card-amount'>{toRupiah(amount)}</span>

              {max ? (
                <>
                  <span className='mx-1'>/</span>
                  <span className='card-max'>{toRupiah(max)}</span>
                </>
              ) : null}
            </div>
          </div>
          {max ? (
            <ProgressBar
              style={{ borderRadius: 0 }}
              variant={generateProgressBar(amount, max)}
              min={0}
              max={max}
              now={amount}
            />
          ) : (
            <ProgressBar
              style={{ borderRadius: 0 }}
              variant='primary'
              min={0}
              max={max}
              now={amount}
            />
          )}

          <div className='mt-3 d-flex justify-content-end mt-4'>
            <button
              className='btn btn-secondary me-2 py-2'
              onClick={onAddExpenseClick}
            >
              Add Expense
            </button>
            <button
              className='btn btn-outline-primary'
              onClick={onViewExpenseClick}
            >
              View Expense
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCard;
