import Image from "next/image";
import { redirect } from "next/navigation";

import { auth } from "@/actions/auth";
import { Header } from "@/components/Header";
import LoginForm from "@/components/LoginForm";

export default async function CodePage() {
  const { teamId } = await auth();

  if (teamId) {
    return redirect("/");
  }

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

      <LoginForm />

      <div />
    </>
  );
}
