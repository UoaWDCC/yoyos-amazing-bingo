import { completeActivity } from "@/actions/completeActivity";

export default async function Page() {
  await completeActivity("1");

  return <></>;
}
