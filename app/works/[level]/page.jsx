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
      image: "/mid-works/fake-for-me.png",
      href: "https://fakefor.me/",
    },
    {
      title: "Digital Hive",
      description: "My startup company website.",
      image: "/mid-works/startup.png",
      href: "https://hive-digital.vercel.app/",
    },
    {
      title: "Alypto Blockchain",
      description: "Alypto Blockchain website.",
      image: "/mid-works/alypto-blockchain.png",
      href: "https://alypto.netlify.app/",
    },
    {
      title: "Online XOX",
      description: "An online XOX game. Also you can play offline.",
      image: "/mid-works/online-xox.png",
      href: "https://aliblackeye-xox.netlify.app/",
    },
    {
      title: "Realtime Chat App",
      description: "A realtime chat app. Chat with your friends!",
      image: "/mid-works/realtime-chat-app.png",
      href: "https://aliblackeye-chat.netlify.app/",
    },
  ];

  const juniorProjects = [

    {
      title: "Oceanland Clone",
      description: "A NFT marketplace clone named Oceanland.",
      image: "/junior-works/oceanland-clone.png",
      href: "https://aliblackeye-oceanland-clone.netlify.app/",
    },
    {
      title: "Age Calculator",
      description: "A simple age calculator.",
      image: "/junior-works/age-calculator.png",
      href: "https://alikaragoz-projects.vercel.app/junior/age-calculator",
    },
    {
      title: "News Page",
      description: "A news page.",
      image: "/junior-works/news-page.png",
      href: "https://alikaragoz-projects.vercel.app/junior/news-page",
    },
    {
      title: "hCaptcha",
      description: "A HCaptcha.",
      image: "/junior-works/hcaptcha.png",
      href: "https://alikaragoz-projects.vercel.app/junior/hCaptcha",
    },
    {
      title: "Restaurant App",
      description: "A responsive restaurant app. See the menu!",
      image: "/junior-works/restaurant-app.png",
      href: "https://aliblackeye-restaurant.netlify.app/",
    },
    {
      title: "Newsletter Sign Up",
      description: "A newsletter sign up.",
      image: "/junior-works/newsletter-sign-up.png",
      href: "https://alikaragoz-projects.vercel.app/junior/newsletter-sign-up",
    }
    
  ];

  const internProjects = [
    {
      title: "Three Column Card",
      description: "A three column card.",
      image: "/intern-works/three-column-card.png",
      href: "https://alikaragoz-projects.vercel.app/intern/three-column-card",
    },

    {
      title: "Huddle Landing",
      description: "A huddle landing page.",
      image: "/intern-works/huddle-landing.png",
      href: "https://alikaragoz-projects.vercel.app/intern/huddle-landing",
    },
    {
      title: "Ping Single Column",
      description: "A ping single column.",
      image: "/intern-works/ping-single-column.png",
      href: "https://alikaragoz-projects.vercel.app/intern/ping-single-column",
    },
    {
      title: "Single Price Grid",
      description: "A single price grid.",
      image: "/intern-works/single-price-grid.png",
      href: "https://alikaragoz-projects.vercel.app/intern/single-price-grid",
    },
    {
      title: "Sign Up Form",
      description: "A sign up form with validation.",
      image: "/intern-works/sign-up-form.png",
      href: "https://alikaragoz-projects.vercel.app/intern/sign-up-form",
    },
    {
      title: "Base Apparel",
      description: "A base apparel.",
      image: "/intern-works/base-apparel.png",
      href: "https://alikaragoz-projects.vercel.app/intern/base-apparel",
    },
    {
      title: "Four Cards",
      description: "A four cards.",
      image: "/intern-works/four-cards.png",
      href: "https://alikaragoz-projects.vercel.app/intern/four-cards",
    },
    {
      title: "Article Preview",
      description: "An article preview.",
      image: "/intern-works/article-preview.png",
      href: "https://alikaragoz-projects.vercel.app/intern/article-preview",
    },
    {
      title: "Social Proof",
      description: "A social proof.",
      image: "/intern-works/social-proof.png",
      href: "https://alikaragoz-projects.vercel.app/intern/social-proof",
    },
    {
      title: "FAQ Accordion",
      description: "A FAQ accordion.",
      image: "/intern-works/faq-accordion.png",
      href: "https://alikaragoz-projects.vercel.app/intern/faq-accordion",
    },
    {
      title: "Profile Card",
      description: "A profile card.",
      image: "/intern-works/profile-card.png",
      href: "https://alikaragoz-projects.vercel.app/intern/profile-card",
    },

    {
      title: "Stats Preview",
      description: "A stats preview.",
      image: "/intern-works/stats-preview.png",
      href: "https://alikaragoz-projects.vercel.app/intern/stats-preview",
    },
    {
      title: "Order Summary",
      description: "An order summary.",
      image: "/intern-works/order-summary.png",
      href: "https://alikaragoz-projects.vercel.app/intern/order-summary",
    },
    {
      title: "QR Code",
      description: "A QR code.",
      image: "/intern-works/qr-code.png",
      href: "https://alikaragoz-projects.vercel.app/intern/qr-code",
    },
    {
      title: "Interactive Rating",
      description: "An interactive rating.",
      image: "/intern-works/interactive-rating.png",
      href: "https://alikaragoz-projects.vercel.app/intern/interactive-rating",
    },
    {
      title: "NFT Card",
      description: "An NFT card.",
      image: "/intern-works/nft-card.png",
      href: "https://alikaragoz-projects.vercel.app/intern/nft-card",
    },
    {
      title: "Product Preview Card",
      description: "A product preview.",
      image: "/intern-works/product-preview-card.png",
      href: "https://alikaragoz-projects.vercel.app/intern/product-preview-card",
    },

    {
      title: "Results Summary",
      description: "A results summary.",
      image: "/intern-works/results-summary.png",
      href: "https://alikaragoz-projects.vercel.app/intern/results-summary",
    },
    {
      title: "Workit Landing Page",
      description: "A workit landing page.",
      image: "/intern-works/workit-landing-page.png",
      href: "https://alikaragoz-projects.vercel.app/intern/workit-landing-page",
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
      </motion.div>
    </motion.div>
  );
}
