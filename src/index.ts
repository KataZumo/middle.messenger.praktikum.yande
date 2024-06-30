import LoginPage from './pages/login-page';
// import './styles.scss';

type PageConstructor = new (props: any) => any;

const pages: Record<string, PageConstructor> = {
  'login': LoginPage,
};

function navigate(page: string) {
  const PageClass = pages[page];
  if (!PageClass) {
    console.error(`Страница ${page} не найдена`);
    return;
  }
  
  const pageInstance = new PageClass({});
  // console.log("🚀 ~ navigate ~ pageInstance:", pageInstance)
  const container = document.getElementById('app')!;
  container.innerHTML = ''; 
  const content = pageInstance.getContent();

  if (content) {
    container.appendChild(content);
  } else {
    console.error('Rendered content is null or undefined');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.substring(1) || 'login';
  navigate(path);
});

document.addEventListener('click', e => {
  const target = e.target as HTMLElement;
  const page = target.getAttribute('page');
  if (page) {
    history.pushState({}, '', `/${page}`);
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

window.addEventListener('popstate', () => {
  const path = window.location.pathname.substring(1) || 'login';
  navigate(path);
});
