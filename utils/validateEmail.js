const validateEmail = (email) => {
  console.log('Validating...');
  const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return re.test(email);
};

module.exports = validateEmail;