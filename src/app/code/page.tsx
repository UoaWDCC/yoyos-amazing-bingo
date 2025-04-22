import Image from "next/image";

import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";

export default function CodePage() {
  return (
    <>
      <Header title="Login" />
      <div className="relative h-[180px] w-full">
        <Image
          src="/assets/logo.svg"
          alt="Yoyo's Amazing Bingo"
          fill
          className="object-contain"
        />
      </div>
      <form className="flex flex-col justify-between gap-6">
        <p className="">Enter team code</p>

        <Input placeholder="ABCD-EFGH" className="w-full" />
        <Button className="w-full" type="submit">
          Enter
        </Button>
      </form>
      <div />
    </>
  );
}
