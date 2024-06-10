"use client";

import Image from "next/image";
import IconButton from "./components/IconButton/IconButton";
import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import "./home.css";
import "./components/Island/Island.css";

enum PageState {
  LANDING = "landing",
  WELCOME = "welcome",
}

export default function Home() {
  const [pageState, setPageState] = useState(PageState.LANDING);

  return (
    <main>
      <AnimatePresence>
        {/* {pageState === PageState.LANDING && ( */}
        <motion.div
          layout
          key="island"
          className="island"
          initial={{ borderRadius: "46px" }}
        >
          <motion.img
            layout
            alt="avatar"
            src="/assets/avatar.jpg"
            width={64}
            height={64}
            layoutId="avatar"
          />

          {pageState === PageState.WELCOME && (
            <motion.h1
              layout
              className="level-3"
              key="title"
              onClick={() => setPageState(PageState.LANDING)}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0)" }}
              exit={{ opacity: 0, filter: "blur(10px)" }}
            >
              Hi, I&apos;m <span className="level-1">Sam F-Harrison</span>
            </motion.h1>
          )}

          {pageState === PageState.LANDING && (
            <IconButton
              icon="add"
              onClick={() => setPageState(PageState.WELCOME)}
              key="button"
              layoutId="button"
            />
          )}
          {pageState === PageState.WELCOME && (
            <IconButton
              icon="ellipsis"
              onClick={() => {}}
              key="button"
              layoutId="button"
            />
          )}
        </motion.div>
        {/* )} */}

        {/* {pageState === PageState.WELCOME && (
          <motion.div
            layoutId="island"
            className="island"
            transition={{ type: "spring", bounce: 0.25 }}
          >
            <motion.img
              alt="avatar"
              src="/assets/avatar.jpg"
              width={64}
              height={64}
              layoutId="avatar"
            />
            <motion.h1
              className="level-3"
              onClick={() => setPageState(PageState.LANDING)}
              key="title"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0)" }}
              exit={{ opacity: 0, filter: "blur(10px)", scale: 0 }}
            >
              Hi, I&apos;m <span className="level-1">Sam F-Harrison</span>
            </motion.h1>
            <IconButton
              icon="ellipsis"
              className="more-actions"
              layoutId="button"
            />
          </motion.div>
        )} */}
      </AnimatePresence>
    </main>
  );
}
