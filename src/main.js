// // Este es el punto de entrada de tu aplicacion

// // import { myFunction } from './lib/index.js';

// // myFunction();

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { getAuth } from 'firebase/auth';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyAgjvB9P7b0T2J6m-P-ks_VqRCb86b9ZIA',
//   authDomain: 'sn-wataritori.firebaseapp.com',
//   projectId: 'sn-wataritori',
//   storageBucket: 'sn-wataritori.appspot.com',
//   messagingSenderId: '718791831933',
//   appId: '1:718791831933:web:842ea9f135b552a00d5c14',
//   measurementId: 'G-J52Y358N81',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

const rootElement = document.getElementById('root');

// Crea el elemento div
// const cuadro = document.createElement('div');

// // Aplica los estilos al cuadro
// cuadro.style.width = '276px';
// cuadro.style.height = '400px';
// cuadro.style.backgroundColor = '#1B3941';
// cuadro.style.opacity = '0.7';

// // Agrega el cuadro al cuerpo del documento
// document.body.appendChild(cuadro);

// Crear un elemento <input> y agregarlo al <div id="root">
const emailElement = document.createElement('p');
const inputElement = document.createElement('input');
inputElement.type = 'text';
inputElement.classList.add('email-input'); // Agregar clase "email-input" al elemento input
emailElement.textContent = 'Email';

rootElement.appendChild(emailElement);
rootElement.appendChild(inputElement);

// Crear un elemento <p> y agregarlo al <div id="root">
const messageElement = document.createElement('p');
const inputPassword = document.createElement('input');
inputPassword.type = 'text';
inputPassword.classList.add('password-input'); // Agregar clase "password-input" al elemento input
messageElement.textContent = 'Password';
rootElement.appendChild(messageElement);
rootElement.appendChild(inputPassword);

// Crear botón de Log In
const loginButton = document.createElement('button');
loginButton.textContent = 'Log In';
loginButton.classList.add('login-button');
rootElement.appendChild(loginButton);
// elemento hermano de log in
const textElement = document.createElement('span'); // span para no repetir etiqueta <p>
textElement.textContent = 'Forgot your password?';
textElement.classList.add('custom-text');
rootElement.appendChild(textElement);

// Crear botón de Continue with Google
const googleButton = document.createElement('button');
googleButton.textContent = 'Continue with Google';
googleButton.classList.add('google-button');
rootElement.appendChild(googleButton);
