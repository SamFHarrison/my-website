import Add from "./Add";
import Ellipsis from "./Ellipsis";

export type IconNames = "add" | "ellipsis";

export interface IconProps {
  size?: number;
  name?: IconNames;
}

export default function Icon({ name, size = 24 }: IconProps) {
  switch (name) {
    case "add":
      return <Add size={size} />;
    case "ellipsis":
      return <Ellipsis size={size} />;
    default:
      break;
  }
}
