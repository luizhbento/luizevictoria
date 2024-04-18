import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
//Layout
import MainLayout from './layouts/MainLayout';
//Pages
import Home from './pages/Home';
import Presenca from './pages/Presenca';
import Presentes from './pages/Presentes';
import Viagem from './pages/Viagem';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/luizevictoria/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/luizevictoria/rsvp" element={<Presenca />} />
        <Route path="/luizevictoria/presentes" element={<Presentes />} />
        <Route path="/luizevictoria/viagem" element={<Viagem />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
