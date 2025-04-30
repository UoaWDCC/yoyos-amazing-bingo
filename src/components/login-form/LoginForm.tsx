"use client";

import { useActionState } from "react";
import { Loader2 } from "lucide-react";

import { signIn } from "@/actions/authActions";
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
      >
        {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Enter"}
      </Button>
    </form>
  );
}