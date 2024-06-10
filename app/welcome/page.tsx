import Image from "next/image";
import Island from "../components/Island/Island";
import IconButton from "../components/IconButton/IconButton";
import "./welcome.css";

export default function Welcome() {
  return (
    <Island>
      <Image alt="avatar" src="/assets/avatar.jpg" width={64} height={64} />

      <h1 className="level-3">
        Hi, I&apos;m <span className="level-1">Sam F-Harrison</span>
      </h1>

      <IconButton icon="ellipsis" className="more-actions" />
    </Island>
  );
}
