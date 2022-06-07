import React, { useContext, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from '../services/useLocalStorage';

const BudgetContext = React.createContext();

export const UNCATEGORIZED_BUDGET_ID = 'Uncategorized';

export const useBudgets = () => {
  return useContext(BudgetContext);
};

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage('budgets', []);
  const [expenses, setExpenses] = useLocalStorage('expenses', []);
  const [expensesByTag, setExpensesByTag] = useState(expenses);

  function getBudgetExpenses(budgetId) {
    return expenses.filter(exp => exp.budgetId === budgetId);
  }

  function getExpenseByTag(budgetId, tag) {
    if (tag === 'all') {
      setExpensesByTag(expenses);
    } else {
      setBudgets(
        expenses.filter(
          expense => expense.tag === tag && expense.budgetId === budgetId
        )
      );
    }
  }

  function addExpense({ desc, amount, budgetId, tag }) {
    setExpenses(oldExpense => {
      return [...oldExpense, { id: uuidV4(), desc, amount, budgetId, tag }];
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
    setExpenses(oldExpense => {
      // eslint-disable-next-line array-callback-return
      return oldExpense.map(expense => {
        if (expense.budgetId !== id) return expense;
        return { ...expense, budgetId: UNCATEGORIZED_BUDGET_ID };
      });
    });
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
        getExpenseByTag,
        expensesByTag,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
