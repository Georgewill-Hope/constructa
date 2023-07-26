import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children, navbarStyles, navbarStyles2 }) => {
  return (
    <React.Fragment>
      <Navbar navbarStyles={navbarStyles} navbarStyles2={navbarStyles2} />
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.3 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
