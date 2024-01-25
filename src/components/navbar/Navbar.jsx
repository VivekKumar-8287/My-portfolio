import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Vivek Kumar
        </motion.span>
        <div className="social">
          <div className="tooltip-container">
            <a href="#">
              <img src="/facebook.png" alt="" />
            </a>
            <div className="tooltip">This link is inactive as I don't have an account on this platform.</div>
          </div>
          <div className="tooltip-container">
          <a href="#">
              <img src="/instagram.png" alt="" />
            </a>
            <div className="tooltip">This link is inactive as I don't have an account on this platform.</div>
          </div>
          <div className="tooltip-container">
          <a href="#">
              <img src="/youtube.png" alt="" />
            </a>
            <div className="tooltip">This link is inactive as I don't have an account on this platform.</div>
          </div>
         
          <a href="https://github.com/VivekKumar-8287" target="blank">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
