import { useState } from 'react';
import BudgetCard from './components/BudgetCard';
import BudgetModal from './components/BudgetModal';
import ExpenseModal from './components/ExpenseModal';
import ViewExpenseModal from './components/ViewExpenseModal';
import UncategorizedCard from './components/UncategorizedCard';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './contexts/BudgetContext';

function App() {
  document.title = 'Budget App - Alterra Assignment';
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [viewExpenseModalBudgetId, setViewExpenseModalBudgetId] = useState();
  const [addExpenseModalBudgetId, setAddexpenseModalBudgetId] = useState();
  const { budgets, getBudgetExpenses } = useBudgets();

  function openExpenseModal(budgetId) {
    setShowExpenseModal(true);
    setAddexpenseModalBudgetId(budgetId);
  }

  return (
    <>
      <main className='container main-app'>
        <div className='d-flex justify-content-between align-items-center mb-4 py-5'>
          <div className='d-flex align-items-center'>
            <img
              src={require('./assets/images/logo.png')}
              alt='Logo'
              className='me-3 logo'
            />
            <h1 className='mt-2 text-logo'>BudgetsApp</h1>
          </div>
          <div>
            <button
              className='btn btn-primary me-2'
              onClick={() => setShowBudgetModal(true)}
            >
              Add Budget
            </button>
            <button
              className='btn btn-outline-primary'
              onClick={openExpenseModal}
            >
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
                onAddExpenseClick={() => openExpenseModal(budget.id)}
                onViewExpenseClick={() =>
                  setViewExpenseModalBudgetId(budget.id)
                }
              />
            );
          })}
          <UncategorizedCard
            onAddExpenseClick={openExpenseModal}
            onViewExpenseClick={() =>
              setViewExpenseModalBudgetId(UNCATEGORIZED_BUDGET_ID)
            }
          />
        </div>
      </main>
      <BudgetModal
        show={showBudgetModal}
        handleClose={() => setShowBudgetModal(false)}
      />

      <ExpenseModal
        show={showExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowExpenseModal(false)}
      />
      <ViewExpenseModal
        budgetId={viewExpenseModalBudgetId}
        handleClose={() => setViewExpenseModalBudgetId()}
      />
    </>
  );
}

export default App;
