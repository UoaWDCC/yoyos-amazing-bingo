import React from "react";
import Image from "next/image";

import { Pill } from "../pill";
import yoyovergif from "./assets/gif/ItsYoyover-anim.gif";

const Yoyover = () => {
  return (
    <div className="fixed inset-0 flex h-dvh w-dvw flex-col items-center justify-center gap-4 bg-black/40 px-4">
      <div className="aspect relative flex aspect-3/4 w-full max-w-[600px] items-center overflow-hidden rounded-xl bg-white">
        <Image src={yoyovergif} className="object-cover" fill alt="Yoyover" />
      </div>
      <Pill>It&apos;s yoyover</Pill>
      <Pill>Please return to 405-422 :D</Pill>
    </div>
  );
};

export default Yoyover;
