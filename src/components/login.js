import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '../assets/firebaseconfig';

export default function login(navigateTo) {
  const rootElement = document.createElement('section');

  // const boxContainer = document.createElement('div');
  // boxContainer.className = 'box-class';
  // document.body.appendChild(boxContainer); // cuadro que contiene sign up

  const titleLabel = document.createElement('h1');
  const emailElement = document.createElement('label');
  const inputElement = document.createElement('input');
  const messageElement = document.createElement('label');
  const inputPassword = document.createElement('input');
  const loginButton = document.createElement('button');
  const textElement = document.createElement('span'); // span para no repetir etiqueta <p>
  const googleButton = document.createElement('button');
  const iconGoogle = document.createElement('img');

  titleLabel.classList.add('title-text');
  inputElement.classList.add('email-input'); // Agregar clase "email-input" al elemento input
  inputPassword.classList.add('password-input'); // Agregar clase "password-input" al elemento input
  textElement.classList.add('custom-text');
  loginButton.classList.add('login-button');
  googleButton.classList.add('google-button');

  emailElement.setAttribute('id', 'email-input');
  messageElement.setAttribute('id', 'password-input');
  iconGoogle.setAttribute('alt', 'Google icon');
  iconGoogle.setAttribute('src', 'images/googleIcon.png');

  titleLabel.textContent = 'WATARIDORI';
  emailElement.textContent = 'Email';
  messageElement.textContent = 'Password';
  loginButton.textContent = 'Log In';
  textElement.textContent = 'Forgot your password?';
  googleButton.textContent = 'Continue with Google';

  inputElement.type = 'text';
  inputPassword.type = 'password';

  rootElement.appendChild(titleLabel);
  rootElement.appendChild(emailElement);
  rootElement.appendChild(inputElement);
  rootElement.appendChild(messageElement);
  rootElement.appendChild(inputPassword);
  rootElement.appendChild(loginButton);
  rootElement.appendChild(textElement);
  rootElement.appendChild(googleButton);

  loginButton.addEventListener('click', () => {
    navigateTo('/');
  });

  googleButton.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // El usuario ha iniciado sesión con éxito
        const user = result.user;
        console.log(user);
        // Navegar a la página principal después de iniciar sesión exitosamente
        navigateTo('/');
      })
      .catch((error) => {
        // Ocurrió un error durante el inicio de sesión
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  });

  rootElement.append(titleLabel, emailElement, messageElement, textElement);

  return rootElement;
}
