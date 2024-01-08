import React from "react";
import { Carousel, Embla } from "@mantine/carousel";
import {
  Group,
  Image,
  Progress,
  Stack,
  Text,
  Paper,
  ActionIcon,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

type Props = {
  username: string;
  initialSlide?: number;
  stories: string[];
  slideToNext?: () => void;
  slideToPrev?: () => void;
};

const Stories = ({
  username,
  stories,
  initialSlide,
  slideToNext,
  slideToPrev,
}: Props) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [embla, setEmbla] = React.useState<Embla | null>(null);
  const { replace } = useRouter();

  const ProgressBar = ({ index }: { index: number }) => {
    const [value, setValue] = React.useState(index < activeSlide ? 100 : 0);

    React.useEffect(() => {
      if (activeSlide == index) {
        setInterval(() => {
          setValue((val) => val + 100 / 200);
        }, 10);
      }
    }, []);

    React.useEffect(() => {
      if (value >= 100 && index === activeSlide) {
        if (embla?.canScrollNext()) embla?.scrollNext();
        else if (slideToNext) slideToNext();
      }
    }, [value]);

    return (
      <Progress
        value={value}
        color="white"
        bg={"black"}
        h={5}
        styles={{ root: { flexGrow: 1 } }}
      />
    );
  };

  return (
    <Paper shadow="xl" w={400} pos={"relative"} bg="transparent">
      <Stack
        w={370}
        p={"sm"}
        gap={"xs"}
        styles={{
          root: {
            position: "absolute",
            zIndex: 2,
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
          },
        }}
      >
        <Group>
          {stories.map((story, index) => (
            <ProgressBar index={index} key={index} />
          ))}
        </Group>
        <Text c={"white"} fw={"bold"} size="md">
          {username}
        </Text>
      </Stack>
      <Group
        styles={{
          root: {
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: 2,
            width: "calc(100% + 60px)",
            transform: "translate(-50%, -50%)",
          },
        }}
        justify="space-between"
      >
        <ActionIcon
          variant="subtle"
          color="white"
          onClick={() => {
            if (embla?.canScrollPrev()) embla.scrollPrev();
            else if (slideToPrev) slideToPrev();
          }}
        >
          <IconChevronLeft />
        </ActionIcon>
        <ActionIcon
          onClick={() => {
            if (embla?.canScrollNext()) embla.scrollNext();
            else if (slideToNext) slideToNext();
          }}
          variant="subtle"
          color="white"
        >
          <IconChevronRight />
        </ActionIcon>
      </Group>
      <Carousel
        onSlideChange={(index) => {
          setActiveSlide(index);
          replace(`/stories/${username}/${index}`);
        }}
        getEmblaApi={setEmbla}
        withControls={false}
        initialSlide={initialSlide}
      >
        {stories.map((story, index) => (
          <Carousel.Slide key={index}>
            <Stack align="center" justify="center">
              <Image
                radius={"md"}
                src={story}
                unselectable="on"
                w={400}
                styles={{ root: { minHeight: "90vh", userSelect: "none" } }}
              />
            </Stack>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Paper>
  );
};

export default Stories;
