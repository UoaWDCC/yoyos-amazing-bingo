"use client";

import { ReactNode } from "react";

import { GameStatusPopup } from "../gamestatus/GameStatusPopup";
import Header from "./Header";
import Link from "next/link";
import { LogOut } from "lucide-react";
import { signOut } from "@/actions/authActions";
import { mutate } from "swr";
import { redirect } from "next/navigation";

type LayoutProps = {
  children: ReactNode;
  title: string;
};

export const NormalLayout = (props: LayoutProps) => {
  const handleSignOut = async () => {
    await signOut();
    mutate("auth", null);
    return redirect("/");
  };

  return (
    <div className="responsive-body">
      <div className="flex min-h-dvh flex-col justify-between gap-4 overflow-hidden border-x-2 p-6">
        <Header title={props.title} />
        {props.children}
        <div className="flex justify-end">
          <Link onClick={handleSignOut} href="/" className="flex items-center gap-2">
            Exit <LogOut size={16} />
          </Link>
        </div>
      </div>
      <GameStatusPopup />
    </div>
  );
};
