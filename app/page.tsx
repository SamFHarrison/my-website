"use client";

import Image from "next/image";
import IconButton from "./components/IconButton/IconButton";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./home.css";
import Icon from "./components/Icon/Icon";

enum PageState {
  LANDING = "landing",
  WELCOME = "welcome",
  LINKS = "links",
}

export default function Home() {
  const [pageState, setPageState] = useState(PageState.LANDING);
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  return (
    <main>
      <div className="container">
        <AnimatePresence>
          {(pageState === PageState.LANDING ||
            pageState === PageState.WELCOME) && (
            <motion.div
              layoutId="island"
              key="island"
              className="island"
              initial={{ borderRadius: "46px" }}
              exit={{
                opacity: 0,
                filter: "blur(5px)",
                transition: { duration: 0.15 },
              }}
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
                <Image alt="avatar" src="/assets/avatar.jpg" priority fill />
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
                  onClick={() => setIsLinksOpen(!isLinksOpen)}
                  key="button"
                  layoutId="button"
                />
              )}
            </motion.div>
          )}

          {isLinksOpen && (
            <div className="container link-container">
              <motion.div
                layoutId="links"
                key="links"
                className="links"
                initial={{
                  borderRadius: "46px",
                  translateY: "-50px",
                  opacity: 0,
                  filter: "blur(5px)",
                }}
                animate={{
                  translateY: "0px",
                  opacity: 100,
                  filter: "blur(0px)",
                  transition: { type: "spring", duration: 2 },
                }}
                exit={{
                  translateY: "-50px",
                  // opacity: 0,
                  filter: "blur(5px)",
                  transition: { duration: 0.15 },
                }}
              >
                <motion.button layout className="back-button">
                  <Icon name="left-arrow" />
                </motion.button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* <AnimatePresence mode="popLayout">
        {pageState === PageState.LINKS && (
          <motion.div
            layoutId="island"
            key="island"
            className="island island-small"
            initial={{ borderRadius: "46px" }}
            exit={{
              opacity: 0,
              filter: "blur(5px)",
              transition: { duration: 0.15 },
            }}
          >
            <motion.button layout className="back-button">
              <Icon name="left-arrow" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence> */}
    </main>
  );
}
