import { Card, Overlay, UnstyledButton } from "@mantine/core";
import { Image, Flex } from "@mantine/core";

type Props = {
  onClick: () => void;
  preview: string;
};

const StoryPreview = ({ onClick, preview }: Props) => {
  return (
    <UnstyledButton onClick={onClick} w={400} h={"90vh"}>
      <Flex align={"center"} justify={"center"} columnGap={"lg"}>
        <Image
          unselectable="on"
          radius={"md"}
          src={preview}
          w={300}
          opacity={0.5}
        />
      </Flex>
    </UnstyledButton>
  );
};

export default StoryPreview;
