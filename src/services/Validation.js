import alertify from 'alertifyjs';

const Validation = {
  required: name => {
    alertify.alert('Validation Error', `${name} is required`);
  },
  isNumber: name => {
    return alertify.alert('Validation Error', `${name} must be a number`);
  },
  isZero: name => {
    return alertify.alert('Validation Error', `${name} cant be zero or minus`);
  },
};

export default Validation;
