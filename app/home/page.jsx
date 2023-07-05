"use client";

import Image from "next/image";

/* import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; */

// Components
import Works from "@/components/Works";

const technologies = [
  {
    name: "React",
    image: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    link: "https://nextjs.org/",
  },

  {
    name: "Tailwind CSS",
    image: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    link: "https://nodejs.org/",
  },
  {
    name: "Express",
    image: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    link: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    link: "https://www.mongodb.com/",
  },
];

const internWorks = [
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

const juniorWorks = [
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

export default function Home() {
  return (
    <div className="home-page">
      <div className="profile-wrapper">
        <div className="profile-wrapper-top">
          <Image
            src={"https://avatars.githubusercontent.com/u/80913896?v=4"}
            alt="Ali Blackeye"
            width={96}
            height={96}
            className="profile-image"
          />
          <div className="name-and-bio">
            <h1 className="profile-name">Ali Karagoz</h1>
            <span className="profile-bio">Software Developer</span>
          </div>
        </div>
        <p className="profile-description">
          A full-stack developer exploring the webverse. Crafting immersive
          experiences through coding and design. Passionate about creating
          user-friendly and visually stunning websites and apps. Experienced in
          both front-end and back-end, bringing ideas to life.
        </p>
      </div>

      {/* 
             <Swiper
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        speed={2000}
        centeredSlides={true}
        loop={true}
        modules={[Autoplay]}
        className="stack-swiper mt-4"
      >
        {technologies.map((technology) => (
          <SwiperSlide key={technology.name}>
            <Link
              href={technology.link}
              target="_blank"
              rel="noreferrer"
            >
              {technology.image ? (
                <Image
                  src={technology.image}
                  alt={technology.name}
                  width={32}
                  height={32}
                  className="profile-image rounded-full"
                />
              ) : (
                technology.name
              )}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper> 
      */}

      {/*       <Works
        title="Mid Works"
        href="/works/mid"
      /> */}
      <Works
        title="Junior Works"
        workItems={juniorWorks}
        href="/works/junior"
      />
      <Works
        title="Intern Works"
        href="/works/intern"
        workItems={internWorks}
      />
    </div>
  );
}
