import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

/* Layout */
import Layout from './components/layout/Layout';

/* Pages */
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Ventures = lazy(() => import('./pages/Ventures'));
const VentureDetail = lazy(() => import('./pages/VentureDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ventures" element={<Ventures />} />
        <Route path="/ventures/:slug" element={<VentureDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
