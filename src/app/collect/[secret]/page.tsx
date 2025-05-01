import CollectClientPage from "@/app/collect/[secret]/page.client";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";

export default function CollectPage() {
  const secret = 'secret'; // TODO: get this from the URL

  return (
    <NormalLayout title="collect">
      <CollectClientPage secret={secret} />
    </NormalLayout>
  );
}
