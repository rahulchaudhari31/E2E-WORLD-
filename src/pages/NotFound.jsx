import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Home, MapPin } from 'lucide-react';
import { Button, Container, Seo } from '../components/common';

const NotFound = () => {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist or has moved. Return to the e2e World Group home page or explore our companies."
        path="/404"
        noindex
      />
      <main className="relative flex min-h-[70vh] items-center overflow-hidden bg-offwhite py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #0B1F3A 1px, transparent 1px), linear-gradient(to bottom, #0B1F3A 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -left-24 top-16 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
        />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex max-w-2xl flex-col items-center text-center"
          >
            <div className="relative mb-6 flex items-center justify-center">
              <p className="select-none font-heading text-[7rem] font-extrabold leading-none tracking-tighter text-navy/10 sm:text-[9rem]">
                404
              </p>
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute"
              >
                <span className="relative flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-accent-gradient text-white shadow-[0_18px_50px_rgba(37,99,235,0.35)]">
                  <Compass size={42} aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-offwhite bg-white text-accent shadow-md">
                    <MapPin size={16} aria-hidden="true" />
                  </span>
                </span>
              </motion.div>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              Off the map
            </span>
            <h1 className="mt-3 font-heading text-3xl font-extrabold text-navy sm:text-4xl md:text-5xl">
              This page has wandered off.
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500">
              The page you are looking for does not exist or has moved. Let us
              help you get back to the right place.
            </p>

            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <Button to="/" variant="primary" icon={Home}>
                Back to Home
              </Button>
              <Button to="/ventures" variant="outline" iconRight={ArrowRight}>
                Explore Companies
              </Button>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              Still stuck?{' '}
              <Link
                to="/contact"
                className="rounded font-semibold text-accent transition-colors hover:text-accent-dark focus-ring"
              >
                Contact our team
              </Link>
              .
            </p>
          </motion.div>
        </Container>
      </main>
    </>
  );
};

export default NotFound;
