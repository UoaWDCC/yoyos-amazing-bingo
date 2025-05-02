import Image from "next/image";

import yoyovergif from "@/assets/gif/yoyover.gif";

import { Pill } from "../pill";

const Yoyover = () => {
  return (
    <>
      <div className="aspect relative flex aspect-3/4 w-full max-w-[600px] items-center overflow-hidden rounded-xl bg-white">
        <Image src={yoyovergif} className="object-cover" fill alt="Yoyover" />
      </div>
      <Pill>It&apos;s yoyover</Pill>
      <Pill>Please return to 405-422 :D</Pill>
    </>
  );
};

export default Yoyover;
