import useSWRMutation from "swr/mutation";

import { completeActivityAction } from "@/actions/completeActivityAction";

export type CompleteActivityArgs = {
  activityId: string;
  answer: string;
};

async function completeActivityFetcher(
  _key: string,
  { arg }: { arg: CompleteActivityArgs },
) {
  await completeActivityAction(arg.activityId, arg.answer);
}

export default function useCompleteActivityMutation() {
  const { trigger, isMutating } = useSWRMutation(
    "completeActivity",
    completeActivityFetcher,
    {
      // Don't populate cache with mutation result since it's just a void
      populateCache: false,
      throwOnError: true,
    },
  );

  return {
    completeActivity: trigger,
    isSubmitting: isMutating,
  };
}
