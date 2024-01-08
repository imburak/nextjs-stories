"use client";
import CloseButton from "@/components/CloseButton";
import Stories from "@/components/Stories";
import { DATA } from "@/config/data";
import { Flex, Overlay } from "@mantine/core";

export default function Story({
  params: { params },
}: {
  params: { params: string[] };
}) {
  const [username, initialSlide] = params;

  const find = DATA.find((val) => val.username === username);

  if (!find) return null;

  return (
    <Overlay color="#000" backgroundOpacity={0.8}>
      <CloseButton />
      <Flex justify={"center"} align={"center"} h={"100%"}>
        <Stories
          username={find?.username}
          stories={find?.stories}
          initialSlide={parseInt(initialSlide)}
        />
      </Flex>
    </Overlay>
  );
}
