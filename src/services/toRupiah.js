export const toRupiah = value =>
  new Intl.NumberFormat('IN-en', {
    style: 'currency',
    currency: 'IDR',
  }).format(value);
