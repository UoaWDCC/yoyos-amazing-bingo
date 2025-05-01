import CollectClientPage from "@/app/collect/[secret]/page.client";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";

export default async function CollectPage({
  params,
}: {
  params: Promise<{ secret: string }>;
}) {
  const { secret } = await params;

  return (
    <NormalLayout title="collect">
      <CollectClientPage secret={secret} />
    </NormalLayout>
  );
}
