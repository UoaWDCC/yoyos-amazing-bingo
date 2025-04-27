import useSWRMutation from "swr/mutation";

import { completeActivity } from "@/actions/completeActivity";

export interface CompleteActivityArgs {
  activityId: string;
  answer: string;
}

async function completeActivityFetcher(
  _key: string,
  { arg }: { arg: CompleteActivityArgs },
) {
  try {
    await completeActivity(arg.activityId, arg.answer);
  } catch (error) {
    // Convert any error to a string message
    if (error instanceof Error) {
      throw error.message;
    }
    throw "An error occurred";
  }
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
