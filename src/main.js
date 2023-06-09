import home from './assets/home.js';
import login from './components/login.js';
import signup from './components/signup.js';
import post from './components/post.js';
import error from './assets/error.js';

const routes = [
  { path: '/login', component: login },
  { path: '/', component: home },
  { path: '/signup', component: signup },
  { path: '/post', component: post },
  { path: '/error', component: error },
];

const defaultRoute = '/';
const rootElement = document.getElementById('root');

function navigateTo(hash, otherComponents) {
  const route = routes.find((routeFound) => routeFound.path === hash);

  if (route && route.component) {
    window.history.pushState({}, route.path, window.location.origin + route.path);
    rootElement.innerHTML = '';
    const component = route.component(navigateTo, otherComponents);
    rootElement.appendChild(component);
  } else {
    navigateTo('/error');
  }
}

window.onpopstate = () => {
  navigateTo(window.location.pathname);
};
// console.log(window.location.pathname,'pathname');
// console.log(defaultRoute,'defaultroute');

// navigateTo("/login");
navigateTo(window.location.pathname || defaultRoute);
