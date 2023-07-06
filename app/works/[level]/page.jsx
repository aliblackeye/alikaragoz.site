"use client";
import Link from "next/link";

import { motion } from "framer-motion";

import PageInfo from "@components/PageInfo";
import WorkItem from "./WorkItem";

export default function WorkPage({ params }) {
  const { level } = params;

  const midProjects = [
    {
      title: "Fake For Me",
      description: "JsonGPT supported fake data generator.",
      image: "/intern-works/1.png",
      href: "https://fakefor.me/",
    },
    {
      title: "Digital Hive",
      description: "My startup company website.",
      image: "/intern-works/2.png",
      href: "https://hive-digital.vercel.app/",
    },

    {
      title: "Results Summary",
      description: "A results summary.",
      image: "/intern-works/3.png",
      href: "https://alikaragoz-projects.vercel.app/intern/results-summary",
    },
  ];

  const juniorProjects = [
    {
      title: "Oceanland Clone",
      description: "A NFT marketplace clone named Oceanland.",
      image: "/junior-works/1.png",
      href: "https://aliblackeye-oceanland-clone.netlify.app/",
    },
    {
      title: "Age Calculator",
      description: "A simple age calculator.",
      image: "/junior-works/2.png",
      href: "https://alikaragoz-projects.vercel.app/junior/age-calculator",
    },
    {
      title: "News Page",
      description: "A news page.",
      image: "/junior-works/3.png",
      href: "https://alikaragoz-projects.vercel.app/junior/news-page",
    },
  ];

  const internProjects = [
    {
      title: "Sign Up Form",
      description: "A sign up form with validation.",
      image: "/intern-works/1.png",
      href: "https://alikaragoz-projects.vercel.app/intern/sign-up-form",
    },
    {
      title: "Three Column Card",
      description: "A three column card.",
      image: "/intern-works/2.png",
      href: "https://alikaragoz-projects.vercel.app/intern/three-column-card",
    },

    {
      title: "Results Summary",
      description: "A results summary.",
      image: "/intern-works/3.png",
      href: "https://alikaragoz-projects.vercel.app/intern/results-summary",
    },
  ];

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

      <div className="work-list">
        {level === "intern" &&
          internProjects.map((project, index) => (
            <WorkItem
              project={project}
              key={index}
            />
          ))}
        {level === "junior" &&
          juniorProjects.map((project, index) => (
            <WorkItem
              project={project}
              key={index}
            />
          ))}
        {level === "mid" &&
          midProjects.map((project, index) => (
            <WorkItem
              project={project}
              key={index}
            />
          ))}
        {level === "all" &&
          [...internProjects, ...juniorProjects, ...midProjects].map(
            (project, index) => (
              <WorkItem
                project={project}
                key={index}
              />
            )
          )}
      </div>
    </motion.div>
  );
}
