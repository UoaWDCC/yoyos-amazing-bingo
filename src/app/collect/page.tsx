"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/Heading";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import { Pill } from "@/components/ui/pill";

import CardDisplay from "./_components/CardDisplay";

const page = () => {
  return (
    <NormalLayout title="CardFloat">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <Heading.h2>You&apos;ve Collected</Heading.h2>
          <Pill>SNORELAX</Pill>
          <CardDisplay />
          <Button className="w-min rounded-full px-8">Collect</Button>
        </div>
      </div>
      <div></div>
    </NormalLayout>
  );
};

export default page;
