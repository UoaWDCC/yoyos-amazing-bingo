import Image from "next/image";

import greenfroggif from "@/assets/gif/greenfrog.gif";

import { Pill } from "../pill";

const Yoyover = () => {
  return (
    <>
      <div className="aspect relative flex aspect-3/4 w-full max-w-[600px] items-center overflow-hidden rounded-xl bg-white">
        <Image src={greenfroggif} className="object-contain" fill alt="Green Frog" />
      </div>
      <Pill>It&apos;s the green frog!</Pill>
      <Pill>Please return to 405-460 :D</Pill>
    </>
  );
};

export default Yoyover;
