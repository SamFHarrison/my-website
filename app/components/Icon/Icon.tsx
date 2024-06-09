import Add from "./Add";

type IconNames = "add";

export interface IconProps {
  size?: number;
  id?: IconNames;
}

export default function Icon({ id, size = 24 }: IconProps) {
  switch (id) {
    case "add":
      return <Add size={size} />;

    default:
      break;
  }
}
