import { Form, Modal, Button } from 'react-bootstrap';
import { useRef } from 'react';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetContext';

export default function ExpenseModal({ show, handleClose, defaultBudgetId }) {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const budgetIdRef = useRef();
  const tagRef = useRef();
  const { addExpense, budgets } = useBudgets();
  function handleSubmit(e) {
    e.preventDefault();
    addExpense({
      desc: descriptionRef.current.value,
      amount: parseInt(amountRef.current.value),
      budgetId: budgetIdRef.current.value,
      tag: tagRef.current.value,
    });
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className='mb-3' controlId='description'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              className='py-3'
              ref={descriptionRef}
              type='text'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='description'>
            <Form.Label>Tag</Form.Label>
            <Form.Control className='py-3' ref={tagRef} type='text' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='max'>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              className='py-3'
              ref={amountRef}
              type='number'
              required
              min={0}
              step={0.01}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='budgetId'>
            <Form.Label>Budget</Form.Label>
            <Form.Select
              defaultValue={defaultBudgetId}
              className='py-3'
              ref={budgetIdRef}
            >
              <option value={UNCATEGORIZED_BUDGET_ID}>Uncategorize</option>
              {budgets.map(budget => {
                return (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <div className='d-flex justify-content-end'>
            <Button variant='primary' className='px-5 py-3' type='submit'>
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
