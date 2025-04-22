import Link from "next/link";

import { Pill } from "@/components/ui/pill";

export function VerifyError() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <span>Invalid Code</span>
      <Pill className="bg-primary">
        <Link className="text-primary-foreground" href="/code">
          Back to login
        </Link>
      </Pill>
    </div>
  );
}
