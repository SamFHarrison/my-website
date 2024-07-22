import Add from "./Add";
import Ellipsis from "./Ellipsis";
import Github from "./Github";
import LeftArrow from "./LeftArrow";
import Linkedin from "./Linkedin";
import XLogo from "./XLogo";

export type IconNames =
  | "add"
  | "ellipsis"
  | "left-arrow"
  | "x-logo"
  | "github"
  | "linkedin";

export interface IconProps {
  size?: number;
  name?: IconNames;
  className?: string;
}

export default function Icon({ name, size = 24, className }: IconProps) {
  switch (name) {
    case "add":
      return <Add size={size} className={className} />;
    case "ellipsis":
      return <Ellipsis size={size} className={className} />;
    case "left-arrow":
      return <LeftArrow size={size} className={className} />;
    case "x-logo":
      return <XLogo size={size} className={className} />;
    case "github":
      return <Github size={size} className={className} />;
    case "linkedin":
      return <Linkedin size={size} className={className} />;
    default:
      break;
  }
}
