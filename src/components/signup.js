export default function signup(navigateTo) {
  const rootElement = document.createElement('aside');
  rootElement.classList.add('root-signup');

  const titleLabel = document.createElement('h1');
  titleLabel.textContent = 'WATARIDORI';
  titleLabel.classList.add('title-text');
  rootElement.appendChild(titleLabel);

  // Para crear texto "CREATE ACCOUNT"
  const createAccountElement = document.createElement('p');
  createAccountElement.textContent = 'CREATE ACCOUNT';
  createAccountElement.classList.add('create-account');
  rootElement.appendChild(createAccountElement);

  const emailElement = document.createElement('p');
  const inputElement = document.createElement('input');
  inputElement.type = 'text';
  inputElement.classList.add('email-input');
  emailElement.textContent = 'Email';
  rootElement.appendChild(emailElement);
  rootElement.appendChild(inputElement);

  const messageElement = document.createElement('p');
  const inputPassword = document.createElement('input');
  inputPassword.type = 'password';
  inputPassword.classList.add('password-input');
  messageElement.textContent = 'Password';
  rootElement.appendChild(messageElement);
  rootElement.appendChild(inputPassword);

  // Añadir el input "Confirm Password"
  const confirmPasswordElement = document.createElement('p');
  const inputConfirmPassword = document.createElement('input');
  inputConfirmPassword.type = 'password';
  inputConfirmPassword.classList.add('confirm-password-input');
  confirmPasswordElement.textContent = 'Confirm Password';
  rootElement.appendChild(confirmPasswordElement);
  rootElement.appendChild(inputConfirmPassword);

  // Boton de sign up
  const signupButton = document.createElement('button');
  signupButton.textContent = 'Signup';
  signupButton.classList.add('signup-button');
  rootElement.appendChild(signupButton);

  // boton de google
  const googleButton = document.createElement('button');
  googleButton.textContent = 'Continue with Google';
  googleButton.classList.add('google-button');
  rootElement.appendChild(googleButton);

  signupButton.addEventListener('click', () => {
    navigateTo('/');
  });

  rootElement.append(titleLabel, emailElement, messageElement);

  return rootElement;
}
