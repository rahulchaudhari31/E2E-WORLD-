/**
 * PageLoader — Slim top progress bar shown on the initial page load.
 */
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PageLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          role="progressbar"
          aria-label="Loading e2e World Group"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuetext="Loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 top-0 z-[100] h-[3px] overflow-hidden bg-slate-200/40"
        >
          <motion.div
            className="h-full w-full origin-left bg-accent-gradient shadow-[0_0_12px_rgba(37,99,235,0.7)]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
