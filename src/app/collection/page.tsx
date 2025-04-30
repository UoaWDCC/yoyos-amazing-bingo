import { auth } from "@/actions/auth";
import Back from "@/components/ui/back/Back";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";

import { UnknownCard } from "./_components/Card";

export default async function CodePage() {
  const { teamId } = await auth();

  console.log(teamId);

  return (
    <NormalLayout title="collection">
      <div className="flex min-h-full flex-col gap-4">
        <Back />
        <div className="flex w-full justify-center">
          <Pill>2/16 cards</Pill>
        </div>
        <div className="grid grid-cols-3 gap-4 overflow-y-scroll">
          {Array.from({ length: 16 }).map((_, index) => (
            <UnknownCard key={index} />
          ))}
        </div>
      </div>
    </NormalLayout>
  );
}
