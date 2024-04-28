'use client';

// Libs
import { motion } from 'framer-motion';

import Container from '@components/container';
// Components
import PageInfo from '@components/page-info';

import { about } from '../../../../../data';

import './styles.scss';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="about-page"
    >
      <Container className="about-page-container">
        <PageInfo title="About" description={about} />
      </Container>
    </motion.div>
  );
}
