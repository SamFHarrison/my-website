import Image from "next/image";
import Island from "./components/Island/Island";
import IconButton from "./components/IconButton/IconButton";
import "./home.css";

export default function Home() {
  return (
    <main>
      <Island>
        <Image alt="avatar" src="/assets/avatar.jpg" width={64} height={64} />
        <IconButton icon="add" href="/welcome" />
      </Island>
    </main>
  );
}
