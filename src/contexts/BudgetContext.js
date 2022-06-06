import React, { useContext } from 'react';
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from '../services/useLocalStorage';
const BudgetContext = React.createContext();

export const useBudgets = () => {
  return useContext(BudgetContext);
};

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage('budgets', []);
  const [expenses, setExpenses] = useLocalStorage('expense', []);

  function getBudgetExpenses(budgetId) {
    return expenses.filter(exp => exp.budgetId === budgetId);
  }

  function addExpense({ desc, amount, budgetId }) {
    setExpenses(oldExpense => {
      return [...oldExpense, { id: uuidV4(), desc, amount, budgetId }];
    });
  }

  function addBudget({ name, max }) {
    setBudgets(oldBudgets => {
      if (oldBudgets.find(budget => budget.name === name)) {
        return oldBudgets;
      }
      return [...oldBudgets, { id: uuidV4(), name, max }];
    });
  }
  function deleteBudget({ id }) {
    setBudgets(oldBudgets => {
      return oldBudgets.filter(budget => budget.id !== id);
    });
  }
  function deleteExpense(id) {
    setExpenses(oldExpense => {
      return oldExpense.filter(expense => expense.id !== id);
    });
  }

  return (
    <BudgetContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
