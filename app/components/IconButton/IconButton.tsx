import { ButtonHTMLAttributes } from "react";
import Icon, { IconNames } from "../Icon/Icon";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import "./IconButton.css";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  icon: IconNames;
  layoutId?: string;
}

export default function IconButton({
  href,
  icon,
  layoutId,
  className,
  onClick,
  ...props
}: IconButtonProps) {
  const classes = clsx("icon-button", className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        <Icon name={icon} size={32} />
      </Link>
    );
  }
  return (
    <motion.button className={classes} onClick={onClick} layoutId={layoutId}>
      <Icon name={icon} size={32} />
    </motion.button>
  );
}
