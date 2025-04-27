import Image from "next/image";
import { redirect } from "next/navigation";

import { auth } from "@/actions/auth";
import logo from "@/assets/logo.svg";
import { LoginForm } from "@/components/login-form";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { getTeamPoints } from "@/actions/getTeamPoints";

export default async function CodePage() {
  const { teamId } = await auth();
  const point = await getTeamPoints("1");
  console.log(point);
  if (teamId) {
    return redirect("/");
  }

  return (
    <NormalLayout title="Login">
      <div className="relative h-[180px] w-full">
        <Image
          src={logo}
          alt="Yoyo's Amazing Bingo"
          fill
          className="object-contain"
        />
      </div>
      {}
      <LoginForm />

      <div />
    </NormalLayout>
  );
}
