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
const Legal = lazy(() => import('./pages/Legal'));

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ventures" element={<Ventures />} />
        <Route path="/ventures/:slug" element={<VentureDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<Legal page="privacy" />} />
        <Route path="/cookie-policy" element={<Legal page="cookies" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
