import { Form, Modal, Button } from 'react-bootstrap';
import { useRef } from 'react';
import { useBudgets } from '../contexts/BudgetContext';
import Validation from '../services/Validation';

export default function BudgetModal({ show, handleClose }) {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudgets();
  function handleSubmit(e) {
    e.preventDefault();
    if (!nameRef.current.value) {
      return Validation.required('Name');
    }

    if (!maxRef.current.value) {
      return Validation.required('Maximum Spending');
    }

    if (typeof parseInt(maxRef.current.value) !== 'number') {
      return Validation.isNumber('Amount');
    }

    if (
      parseInt(maxRef.current.value) === 0 ||
      parseInt(maxRef.current.value) < 0
    ) {
      return Validation.isZero('Amount');
    }

    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control className='py-3' ref={nameRef} type='text' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='max'>
            <Form.Label>Maximum Spending</Form.Label>
            <Form.Control
              className='py-3'
              ref={maxRef}
              type='number'
              required
              min={0}
              step={0.01}
            />
          </Form.Group>
          <div className='d-flex justify-content-end mt-5'>
            <Button variant='primary' className='px-5 py-3' type='submit'>
              Add
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
