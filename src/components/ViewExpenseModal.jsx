import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetContext';
import { toRupiah } from '../services/toRupiah';

export default function ViewExpenseModal({ budgetId, handleClose }) {
  const {
    getBudgetExpenses,
    budgets,
    deleteBudget,
    deleteExpense,
    // geteExpenseByTag,
  } = useBudgets();

  const expenses = getBudgetExpenses(budgetId);

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()];
  }

  const handleSearchByTag = e => {
    // setExpense(geteExpenseByTag(e.target.value));
    console.log(e.target.value);
  };

  // const expenses = getBudgetExpenses(budgetId);

  const budget =
    UNCATEGORIZED_BUDGET_ID === budgetId
      ? { name: 'Uncategorized', id: UNCATEGORIZED_BUDGET_ID }
      : budgets.find(budget => budget.id === budgetId);

  return (
    <Modal show={budgetId != null} onHide={handleClose} scrollable={true}>
      <Modal.Header closeButton>
        <Modal.Title className='w-100'>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='view-expense-title'>
              Expenses List - {budget?.name}
            </span>
            {budgetId !== UNCATEGORIZED_BUDGET_ID ? (
              <button
                className='btn btn-danger me-3'
                onClick={() => {
                  deleteBudget(budget);
                  handleClose();
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='#fff'
                  className='bi bi-trash3'
                  viewBox='0 0 16 16'
                >
                  <path d='M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z' />
                </svg>
              </button>
            ) : null}
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-view-expense-body'>
        <Form.Group className='mb-3' controlId='budgetId'>
          <Form.Select
            defaultValue='all'
            onChange={handleSearchByTag}
            className='py-3'
          >
            <option value='all'>All</option>
            {getUniqueListBy(expenses).map(expense => {
              return (
                <option key={expense.id} value={expense.tag}>
                  {expense.tag}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        {expenses.map(expense => {
          return (
            <React.Fragment key={expense.id}>
              <div className='d-flex align-items-center justify-content-between mb-3 border-bottom py-2'>
                <div>
                  <span style={{ fontSize: '20px' }}>{expense.desc} - </span>
                  <span className='text-secondary' style={{ fontSize: '14px' }}>
                    {expense.tag}
                  </span>
                </div>
                <div className='d-flex align-items-center'>
                  <span className='me-3'>{toRupiah(expense.amount)}</span>
                  <button
                    className='btn btn-outline-danger'
                    onClick={() => deleteExpense(expense.id)}
                  >
                    x
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </Modal.Body>
    </Modal>
  );
}
