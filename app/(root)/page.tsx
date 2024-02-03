"use client";

// Libs
import Image from "next/image";
import { motion } from "framer-motion";
/* import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; */

// Data
import { description, fullName, internProjects, juniorProjects, midProjects, photo, title } from "../../data";

// Components
import Works from "@components/works";

import "./styles.scss";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="home-page"
    >
      <div className="profile-wrapper">
        <div className="profile-wrapper-top">
          <div className="profile-image">
            <Image
              src={photo}
              alt={fullName}
              width={1920}
              height={1080}
            />
          </div>
          <div className="name-and-bio">
            <h1 className="profile-name">{fullName}</h1>
            <span className="profile-bio">{title}</span>
          </div>
        </div>
        <p className="profile-description">
          {description}
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
        title="Mid Works"
        workItems={midProjects}
        href="/works/mid"
      />
      <Works
        title="Junior Works"
        workItems={juniorProjects}
        href="/works/junior"
      />
      <Works
        title="Intern Works"
        href="/works/intern"
        workItems={internProjects}
      />
    </motion.div>
  );
}
