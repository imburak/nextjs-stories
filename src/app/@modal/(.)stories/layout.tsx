"use client";
import { Button, Flex, Overlay } from "@mantine/core";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { Carousell } from "../hooks";
import CloseButton from "@/components/CloseButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Overlay color="#000" backgroundOpacity={0.8}>
      <CloseButton />
      <Flex align={"center"} justify={"center"} h={"100%"} w={"100%"}>
        <Carousell />
      </Flex>
    </Overlay>
  );
}
