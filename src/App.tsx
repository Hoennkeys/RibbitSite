import { useState, useEffect } from 'react';
import Home from './pages/index';
import Contact from './pages/contact';
import Donate from './pages/donate';

export default function App() {
  const [route, setRoute] = useState<string>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#contact') {
        setRoute('contact');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#donate') {
        setRoute('donate');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setRoute('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Executa a rota inicial

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (route === 'contact') {
    return <Contact />;
  }
  if (route === 'donate') {
    return <Donate />;
  }
  return <Home />;
}
