import AboutPage from "../../pages/about";
import ContactPage from "../../pages/contact";
import HomePage from "../../pages/home";

export const routes = [
  {
    name: "Home",
    path: '/',
    element: <HomePage />,
  },
  {
    name: "Sobre",
    path: '/about',
    element: <AboutPage />,
  },
  {
    name: "Contato",
    path: '/contact',
    element: <ContactPage />,
  },
];
