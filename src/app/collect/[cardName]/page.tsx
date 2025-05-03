import CollectClientPage from "@/app/collect/[cardName]/page.client";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";

export default async function CollectPage({
  params,
}: {
  params: Promise<{ cardName: string }>;
}) {
  const { cardName } = await params;

  return (
    <NormalLayout title="Collect" noFooter>
      <CollectClientPage cardName={cardName} />
    </NormalLayout>
  );
}
