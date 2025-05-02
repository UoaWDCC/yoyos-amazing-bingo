import { NormalLayout } from "@/components/ui/layout/NormalLayout";

import { GameStatusField } from "./_components/GameStatusField";

export default function AdminPage() {
  return (
    <NormalLayout title="Admin">
      <GameStatusField />
      <div />
    </NormalLayout>
  );
}
