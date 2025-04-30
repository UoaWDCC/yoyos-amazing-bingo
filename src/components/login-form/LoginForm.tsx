"use client";

import { useActionState } from "react";

import { signIn } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [state, action, isPending] = useActionState(signIn, null);

  return (
    <form action={action} className="flex flex-col justify-between gap-6">
      <p className="">Enter team code</p>

      <Input
        name="code"
        placeholder="ABCD-EFGH"
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
