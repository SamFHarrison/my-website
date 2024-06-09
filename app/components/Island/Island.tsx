import Image from "next/image";
import "./Island.css";
import IconButton from "../IconButton/IconButton";
import { PropsWithChildren } from "react";

export default function Island({ children }: PropsWithChildren) {
  return (
    <section>
      <div className="island">{children}</div>
    </section>
  );
}
