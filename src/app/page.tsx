"use client";
import { DATA } from "@/config/data";
import {
  Avatar,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  UnstyledButton,
  rem,
} from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Group my={"md"} gap={"xl"}>
        {DATA.map((user, index) => (
          <UnstyledButton
            component={Link}
            key={index}
            href={`/stories/${user.username}`}
          >
            <Stack align="center" gap={5}>
              <Group
                w={rem(60)}
                h={rem(60)}
                pos={"relative"}
                justify="center"
                align="center"
              >
                <div
                  style={{
                    border: "2px solid red",
                    width: "100%",
                    height: "100%",
                    background: "none",
                    position: "absolute",
                    borderRadius: "100%",
                  }}
                ></div>
                <Avatar src={user.avatar} size={rem(50)} />
              </Group>
              <Text size="xs">{user.username}</Text>
            </Stack>
          </UnstyledButton>
        ))}
      </Group>
      <Divider />
    </Container>
  );
}
