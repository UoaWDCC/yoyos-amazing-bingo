import { NormalLayout } from "@/components/ui/layout/NormalLayout";

import HomeClientPage from "./page.client";

export default async function HomePage() {
  return (
    <NormalLayout title="Home">
      <p>
        By default, this data is cached for 2s and refetched when you refocus
        the page. Try change tabs and back!
      </p>
      <HomeClientPage />
    </NormalLayout>
  );
}
