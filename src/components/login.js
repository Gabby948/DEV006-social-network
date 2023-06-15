import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '../assets/firebaseconfig';

export default function login(navigateTo) {
  const rootElement = document.createElement('section');

  const titleLabel = document.createElement('h1');
  const formContainer = document.createElement('div');
  const loginButton = document.createElement('button');
  const googleButton = document.createElement('button');
  const textElement = document.createElement('span');
  // const iconGoogle = document.createElement('img');
  const emailContainer = document.createElement('div');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  const passwordContainer = document.createElement('div');
  const passwordLabel = document.createElement('label');
  const passwordInput = document.createElement('input');

  rootElement.classList.add('root-login');
  titleLabel.classList.add('title-text');
  textElement.classList.add('custom-text');
  loginButton.classList.add('login-button');
  googleButton.classList.add('google-button');
  emailLabel.classList.add('email-label');
  emailInput.classList.add('email-input');
  passwordLabel.classList.add('password-label');
  passwordInput.classList.add('password-input');
  formContainer.classList.add('form-container');

  titleLabel.textContent = 'WATARIDORI';
  loginButton.textContent = 'Log In';
  textElement.textContent = 'Forgot your password?';
  googleButton.textContent = 'Continue with Google';

  emailLabel.textContent = 'Email';
  emailInput.type = 'text';
  emailContainer.appendChild(emailLabel);
  emailContainer.appendChild(emailInput);
  formContainer.appendChild(emailContainer);

  passwordLabel.textContent = 'Password';
  passwordInput.type = 'password';
  passwordContainer.appendChild(passwordLabel);
  passwordContainer.appendChild(passwordInput);
  formContainer.appendChild(passwordContainer);

  rootElement.appendChild(titleLabel);
  rootElement.appendChild(formContainer);
  rootElement.appendChild(loginButton);
  rootElement.appendChild(textElement);
  rootElement.appendChild(googleButton);

  loginButton.addEventListener('click', () => {
    navigateTo('/');
  });

  googleButton.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigateTo('/post');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  });

  return rootElement;
}
