import { mutate } from "swr";

import { updateActivityDescriptionAction } from "@/actions/updateActivityDescriptionAction";

export default async function mutateActivityDescription(
  activityId: string,
  description: string,
) {
  await updateActivityDescriptionAction(activityId, description);

  // Invalidate the cache for both the specific activity and all activities
  mutate(`getActivity/${activityId}`);
  mutate(`getAllActivities`);
}
