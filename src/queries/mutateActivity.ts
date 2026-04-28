import { mutate } from "swr";

import { updateActivityAction } from "@/actions/updateActivityAction";
import { Activity } from "@/models/Activity";

export default async function mutateActivity(activity: Activity) {
  await updateActivityAction(activity);

  mutate(`getActivity/${activity.id}`);
  mutate("getAllActivities");
}
