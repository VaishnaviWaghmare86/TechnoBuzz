const signInForm = document.getElementById('signInForm');
const recoveryForm = document.getElementById('recoveryForm');
const forgotToggle = document.getElementById('forgotToggle');
const recoveryPanel = document.getElementById('recoveryPanel');
const closeRecovery = document.getElementById('closeRecovery');
const loginMessage = document.getElementById('loginMessage');
const recoveryMessage = document.getElementById('recoveryMessage');

const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const recoveryEmailError = document.getElementById('recoveryEmailError');

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(input, messageEl) {
  const value = input.value.trim();
  if (!value) {
    messageEl.textContent = 'Email is required.';
    return false;
  }
  if (!emailPattern.test(value)) {
    messageEl.textContent = 'Enter a valid email address.';
    return false;
  }
  messageEl.textContent = '';
  return true;
}

function validatePassword(input, messageEl) {
  const value = input.value.trim();
  if (!value) {
    messageEl.textContent = 'Password is required.';
    return false;
  }
  if (value.length < 6) {
    messageEl.textContent = 'Use at least 6 characters.';
    return false;
  }
  messageEl.textContent = '';
  return true;
}

signInForm.addEventListener('submit', (event) => {
  event.preventDefault();
  loginMessage.textContent = '';

  const emailInput = signInForm.querySelector('#email');
  const passwordInput = signInForm.querySelector('#password');
  const emailValid = validateEmail(emailInput, emailError);
  const passwordValid = validatePassword(passwordInput, passwordError);

  if (!emailValid || !passwordValid) {
    loginMessage.textContent = 'Please fix the highlighted fields to continue.';
    return;
  }

  loginMessage.textContent = `Welcome back, ${emailInput.value.trim()}! Redirecting...`;
  loginMessage.style.color = '#9ee7ff';
  signInForm.reset();
  setTimeout(() => {
    loginMessage.textContent = '';
  }, 4500);
});

recoveryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  recoveryMessage.textContent = '';

  const recoveryInput = recoveryForm.querySelector('#recoveryEmail');
  const isValid = validateEmail(recoveryInput, recoveryEmailError);
  if (!isValid) {
    recoveryMessage.textContent = 'Please provide a valid email address.';
    return;
  }

  recoveryMessage.textContent = `Password reset instructions have been sent to ${recoveryInput.value.trim()}.`;
  recoveryMessage.style.color = '#9ee7ff';
  recoveryEmailError.textContent = '';
  recoveryForm.reset();
});

forgotToggle.addEventListener('click', () => {
  recoveryPanel.hidden = false;
  recoveryPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

closeRecovery.addEventListener('click', () => {
  recoveryPanel.hidden = true;
  recoveryMessage.textContent = '';
  recoveryEmailError.textContent = '';
});
