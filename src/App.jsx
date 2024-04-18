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
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/rsvp" element={<Presenca />} />
        <Route path="/presentes" element={<Presentes />} />
        <Route path="/viagem" element={<Viagem />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
}

export default App;
