import Image from "next/image";
import "./Island.css";
import IconButton from "../IconButton/IconButton";

export default function Island() {
  return (
    <section>
      <div className="island">
        <Image alt="avatar" src="/assets/avatar.jpg" width={64} height={64} />
        <IconButton />
      </div>
    </section>
  );
}
