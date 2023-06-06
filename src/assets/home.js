export default function home(navigateTo) {
  const rootElement = document.createElement('main');

  const title = document.createElement('h2');
  title.textContent = 'WELCOME TO WATARIDORI';
  title.classList.add('home-title'); // Agregar clase "home-title" al elemento h2

  const button = document.createElement('button');
  button.textContent = 'CONTINUE';
  button.classList.add('home-back'); // Agregar clase "login-button" al elemento button
  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  rootElement.append(title, button);
  return rootElement;
}
