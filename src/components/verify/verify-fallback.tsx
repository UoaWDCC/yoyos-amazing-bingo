import React from "react";
import { Loader2 } from "lucide-react";

import { Pill } from "@/components/ui/pill";

export function VerifyFallback() {
  return (
    <Pill className="flex items-center gap-6">
      <span>Verifying Code</span>
      <Loader2 className="h-4 w-4 animate-spin" />
    </Pill>
  );
}
