export const generateProgressBar = (amount, max) => {
  const value = amount / max;
  if (value < 0.5) return 'primary';
  if (value < 0.75) return 'warning';
  return 'danger';
};
