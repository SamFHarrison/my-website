"use client";

import Image from "next/image";
import IconButton from "./components/IconButton/IconButton";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./home.css";

enum PageState {
  LANDING = "landing",
  WELCOME = "welcome",
}

export default function Home() {
  const [pageState, setPageState] = useState(PageState.LANDING);

  return (
    <main>
      <AnimatePresence>
        {(pageState === PageState.LANDING ||
          pageState === PageState.WELCOME) && (
          <motion.div
            layoutId="island"
            key="island"
            className="island"
            initial={{ borderRadius: "46px" }}
          >
            <motion.button
              className="avatar"
              layoutId="avatar"
              onClick={() => {
                if (pageState !== PageState.LANDING) {
                  setPageState(PageState.LANDING);
                }
              }}
            >
              <Image
                alt="avatar"
                src="/assets/avatar.jpg"
                width={64}
                height={64}
              />
            </motion.button>

            <AnimatePresence mode="popLayout">
              {pageState === PageState.WELCOME && (
                <motion.h1
                  key="title"
                  layoutId="title"
                  className="level-3"
                  initial={{ opacity: 0, filter: "blur(5px)" }}
                  transition={{ delay: 0.15 }}
                  animate={{ opacity: 1, filter: "blur(0)" }}
                  exit={{
                    opacity: 0,
                    filter: "blur(5px)",
                    transition: { duration: 0.15 },
                  }}
                >
                  Hi, I&apos;m <span className="level-1">Sam F-Harrison</span>
                </motion.h1>
              )}
            </AnimatePresence>

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
        )}
      </AnimatePresence>
    </main>
  );
}
