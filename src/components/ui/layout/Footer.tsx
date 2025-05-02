import Link from "next/link";
import { redirect } from "next/navigation";
import { LogOutIcon } from "lucide-react";
import { mutate } from "swr";

import { signOut } from "@/actions/authActions";

export function Footer() {
  const handleSignOut = async () => {
    await signOut();
    mutate("auth", null);
    return redirect("/");
  };

  return (
    <div className="flex h-10 justify-end">
      <Link
        onClick={handleSignOut}
        href="/"
        className="flex items-center gap-2"
      >
        Exit <LogOutIcon size={16} />
      </Link>
    </div>
  );
}
