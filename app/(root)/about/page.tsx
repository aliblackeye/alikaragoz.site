"use client";

// Libs
import { motion } from "framer-motion";

// Components
import PageInfo from "@components/page-info";

import "./styles.scss";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="about-page"
    >
      <PageInfo
        title="About"
        description="It's not that difficult to find my contact information by searching aliblackeye. Know little more about me here"
      />
    </motion.div>
  );
}
