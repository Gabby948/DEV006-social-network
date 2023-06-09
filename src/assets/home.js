export default function home(navigateTo) {
  const rootElement = document.createElement('main');
  rootElement.classList.add('root-home');

  const title = document.createElement('h2');
  const button = document.createElement('button');

  title.classList.add('home-title'); // Agregar clase "home-title" al elemento h2
  button.classList.add('home-back'); // Agregar clase "login-button" al elemento button

  title.textContent = 'WELCOME TO WATARIDORI';
  button.textContent = 'CONTINUE';

  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  rootElement.append(title, button);
  return rootElement;
}
