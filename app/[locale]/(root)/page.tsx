"use client";

// Libs
import Image from "next/image";
import { motion } from "framer-motion";
/* import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; */

// Data
import { juniorProjects, midProjects, photo } from "../../../data";

// Components
import Works from "@components/works";

import "./styles.scss";
import Container from "@components/container";
import { useI18n } from "@locales/client";

export default function Home() {
  // Locale
  const t = useI18n() as any;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="home-page"
    >
      <Container className="home-page-container">
        <div className="profile-wrapper">
          <div className="profile-wrapper-top">
            <div className="profile-image">
              <Image
                src={`${photo}`}
                alt={t("GLOBAL.PAGE_CONTENTS.HOME.TITLE")}
                width={1920}
                height={1080}
              />
            </div>
            <div className="name-and-bio">
              <h1 className="profile-name">
                {t("GLOBAL.PAGE_CONTENTS.HOME.FULLNAME")}
              </h1>
              <span className="profile-bio">
                {t("GLOBAL.PAGE_CONTENTS.HOME.TITLE")}
              </span>
            </div>
          </div>
          <p className="profile-description">
            {t("GLOBAL.PAGE_CONTENTS.HOME.DESCRIPTION")}
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
          title={t("GLOBAL.COMPONENTS.WORKS.TITLES.MID_WORKS")}
          workItems={midProjects}
          href="/works/mid"
        />
        <Works
          title={t("GLOBAL.COMPONENTS.WORKS.TITLES.JUNIOR_WORKS")}
          workItems={juniorProjects}
          href="/works/junior"
        />
      </Container>
    </motion.div>
  );
}
