import { ButtonHTMLAttributes } from "react";
import Icon, { IconNames } from "../Icon/Icon";
import Link from "next/link";
import "./IconButton.css";
import clsx from "clsx";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  icon: IconNames;
}

export default function IconButton({
  href,
  icon,
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
    <button className={classes} onClick={onClick} {...props}>
      <Icon name={icon} size={32} />
    </button>
  );
}
