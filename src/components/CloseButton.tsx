import { ActionIcon } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import Link from "next/link";

const CloseButton = () => {
  return (
    <ActionIcon
      component={Link}
      href={"/"}
      variant="subtle"
      c={"white"}
      styles={{ root: { position: "absolute", right: 10, top: 10, zIndex: 2 } }}
    >
      <IconX />
    </ActionIcon>
  );
};

export default CloseButton;
