import { useState } from 'react';
import BudgetCard from './components/BudgetCard';
import BudgetModal from './components/BudgetModal';
import { useBudgets } from './contexts/BudgetContext';

function App() {
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const { budgets, getBudgetExpenses } = useBudgets();

  return (
    <>
      <main className='container py-4'>
        <div className='d-flex justify-content-between mb-4 py-5'>
          <h1>Budgets App</h1>
          <div>
            <button
              className='btn btn-primary me-2 px-4 py-3'
              onClick={() => setShowBudgetModal(true)}
            >
              Add Budget
            </button>
            <button className='btn btn-outline-primary px-4 py-3'>
              Add Expense
            </button>
          </div>
        </div>

        <div className='row'>
          {budgets.map(budget => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount,
              0
            );
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
              />
            );
          })}
        </div>
      </main>
      <BudgetModal
        show={showBudgetModal}
        handleClose={() => setShowBudgetModal(false)}
      />
    </>
  );
}

export default App;
