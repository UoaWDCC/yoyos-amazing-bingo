import Image from "next/image";
import { redirect } from "next/navigation";

import { auth } from "@/actions/auth";
import logo from "@/assets/logo.svg";
import { Header } from "@/components/Header";
import { LoginForm } from "@/components/login-form";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";

export default async function CodePage() {
  const { teamId } = await auth();

  if (teamId) {
    return redirect("/");
  }

  return (
    <NormalLayout>
      <Header title="Login" />

      <div className="relative h-[180px] w-full">
        <Image
          src={logo}
          alt="Yoyo's Amazing Bingo"
          fill
          className="object-contain"
        />
      </div>

      <LoginForm />

      <div />
    </NormalLayout>
  );
}
