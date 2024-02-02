"use client";

// Libs
import Link from "next/link";
import { motion } from "framer-motion";

// Data
import { internProjects, juniorProjects, midProjects } from "../../../../data";

// Components
import PageInfo from "@components/page-info";

// Partials
import WorkItem from "./_partials/work-item";

import "./styles.scss";

interface IWorkPageProps {
  params: { level: string };
}

export default function WorkPage(props: IWorkPageProps) {

  // Destructuring props
  const { params } = props;

  // Destructuring params
  const { level } = params;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="works-page"
    >
      <PageInfo
        title="Works"
        description="Explore my works and experience the passion and creativity I've poured into each project."
      />

      <div className="levels">
        <Link
          href={"/works/all"}
          className={`level ${level === "all" ? "active" : ""}`}
        >
          All
        </Link>
        <Link
          href={"/works/mid"}
          className={`level ${level === "mid" ? "active" : ""}`}
        >
          Mid
        </Link>
        <Link
          href={"/works/junior"}
          className={`level ${level === "junior" ? "active" : ""}`}
        >
          Junior
        </Link>
        <Link
          href={"/works/intern"}
          className={`level ${level === "intern" ? "active" : ""}`}
        >
          Intern
        </Link>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              staggerChildren: 0.2,
              bounce: 0.5,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="works-list"
      >
        {level === "intern" &&
          internProjects.map((project, index) => (
            <WorkItem
              key={index}
              project={project}
            />
          ))}
        {level === "junior" &&
          juniorProjects.map((project, index) => (
            <WorkItem
              key={index}
              project={project}
            />
          ))}
        {level === "mid" &&
          midProjects.map((project, index) => (
            <WorkItem
              key={index}
              project={project}
            />
          ))}
        {level === "all" &&
          [...internProjects, ...juniorProjects, ...midProjects].map(
            (project, index) => (
              <WorkItem
                key={index}
                project={project}
              />
            )
          )}
      </motion.div>
    </motion.div>
  );
}
