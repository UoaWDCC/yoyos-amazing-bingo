"use client";

import { useActionState } from "react";
import { redirect } from "next/navigation";

import { auth, signIn } from "@/actions/authActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mutate } from "swr";

export function LoginForm() {
  const handleSignIn = async (_prevState: unknown, formData: FormData ) => {
    const res = await signIn(formData)
    if (res?.success) {
      const { teamId } = await auth();
      mutate("auth", teamId); // Revalidate auth cache
      redirect("/board");
    }
    return res;
  }
  
  const [state, action, isPending] = useActionState(handleSignIn, null);

  return (
    <form action={action} className="flex flex-col justify-between gap-6">
      <p className="">Enter team code</p>

      <Input
        name="code"
        placeholder="ABC123"
        className="w-full"
        error={state?.error}
        autoFocus
        autoComplete="off"
      />

      <Button
        className="flex w-full items-center justify-center"
        type="submit"
        disabled={isPending}
        isLoading={isPending}
      >
        Enter
      </Button>
    </form>
  );
}
