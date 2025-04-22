"use client";

import { useActionState } from "react";

import { signIn } from "@/actions/auth";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(signIn, null);

  return (
    <form action={formAction} className="flex flex-col justify-between gap-6">
      <p className="">Enter team code</p>

      <Input
        name="code"
        placeholder="ABCD-EFGH"
        className="w-full"
        error={state?.error}
        autoFocus
        autoComplete="off"
      />

      <Button className="w-full" type="submit" disabled={isPending}>
        {isPending ? "Entering..." : "Enter"}
      </Button>
    </form>
  );
}
