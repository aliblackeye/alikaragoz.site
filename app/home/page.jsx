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

      <Works
        title="Mid Works"
        href="/works/mid"
      />
      <Works
        title="Junior Works"
        href="/works/junior"
      />
      <Works
        title="Intern Works"
        href="/works/intern"
      />
    </div>
  );
}
