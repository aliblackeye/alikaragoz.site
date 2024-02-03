"use client";

// Libs
import { motion } from "framer-motion";

// Components
import PageInfo from "@components/page-info";

import "./styles.scss";
import { about } from "../../../data";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="about-page"
    >
      <PageInfo
        title="About"
        description={about}
      />
    </motion.div>
  );
}
