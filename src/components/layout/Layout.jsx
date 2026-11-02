/**
 * Layout — Persistent shell around every route.
 */
import { Suspense } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './Navbar';
import Footer from './Footer';
import PageLoader from './PageLoader';
import ScrollToTop from './ScrollToTop';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const AnimatedOutlet = () => {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
};

const RouteFallback = () => (
  <div
    role="status"
    aria-live="polite"
    className="flex min-h-[60vh] items-center justify-center bg-offwhite"
  >
    <div className="flex flex-col items-center gap-4">
      <span
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-accent"
      />
      <span className="text-sm font-medium text-slate-500">Loading page…</span>
    </div>
  </div>
);

const Layout = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only z-[110] rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus-ring"
      >
        Skip to content
      </a>

      <ScrollToTop />
      <PageLoader />

      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div id="main-content" className="flex-1">
          <Suspense fallback={<RouteFallback />}>
            <AnimatedOutlet />
          </Suspense>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
