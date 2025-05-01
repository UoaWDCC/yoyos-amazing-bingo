import CollectClientPage from "@/app/collect/[secret]/page.client";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";

export default function CollectPage({
  params,
}: {
  params: { secret: string };
}) {
  const secret = params.secret;
  return (
    <NormalLayout title="collect">
      <CollectClientPage secret={secret} />
    </NormalLayout>
  );
}
