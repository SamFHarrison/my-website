import Add from "./Add";
import Ellipsis from "./Ellipsis";
import LeftArrow from "./LeftArrow";

export type IconNames = "add" | "ellipsis" | "left-arrow";

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
    default:
      break;
  }
}
