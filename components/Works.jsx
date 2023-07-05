import Image from "next/image";
import Link from "next/link";

import { BsFillCaretRightFill } from "react-icons/bs";

import { motion } from "framer-motion";

export default function Works({
  title = "Current Work",
  href = "/current-work",
  workItems = [
    {
      title: "Work 1",
      href: "/work1",
      description: "Work 1 description",
      image: "https://picsum.photos/200/200",
    },
    {
      title: "Work 2",
      href: "/work2",
      description: "Work 2 description",
      image: "https://picsum.photos/200/200",
    },
    {
      title: "Work 3",
      href: "/work3",
      description: "Work 3 description",
      image: "https://picsum.photos/200/200",
    },
  ],
}) {
  return (
    <div className="works-wrapper">
      <div className="works-header">
        <h1 className="works-title ">{title}</h1>
        <Link
          href={href}
          className="see-all-link"
        >
          <span className="see-all-text">See all</span>
          <BsFillCaretRightFill
            size={10}
            color="#393f8f"
          />
        </Link>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 1, scale: 0 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
              bounce: 0.5,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="works-list"
      >
        {workItems.map((workItem) => (
          <motion.div
            key={workItem}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
              },
            }}
          >
            <Link
              href={workItem.href}
              className="work-item"
            >
              <div
                className="gradient-hover 
              "
              >
                <div className="image">
                  <Image
                    src={workItem.image}
                    alt="work"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="mt-2">
                  <div className="title">
                    <span className="text-md font-bold">{workItem.title}</span>
                  </div>
                  <div className="description">
                    <span className="text-[15px] text-gray-400 font-medium">
                      {workItem.description}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
