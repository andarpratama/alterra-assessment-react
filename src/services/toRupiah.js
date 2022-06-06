export const toRupiah = value =>
  new Intl.NumberFormat('IN-en', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
// .slice(0, -3);
