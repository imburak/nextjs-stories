"use client";
import Stories from "@/components/Stories";
import StoryPreview from "@/components/StoryPreview";
import { DATA } from "@/config/data";
import { Carousel, Embla } from "@mantine/carousel";
import { useParams, useRouter } from "next/navigation";
import React from "react";

export const Carousell = () => {
  const [embla, setEmbla] = React.useState<Embla | null>(null);
  const [initialSlide, setInitialSlide] = React.useState(0);

  React.useEffect(() => {
    embla?.scrollTo(DATA.findIndex((val) => val.username === username));
  }, [embla]);

  const { params } = useParams();

  const [username] = params as string[];

  const { replace } = useRouter();

  const slideToNext = (index: number) => {
    if (index < DATA.length - 1) {
      setInitialSlide(0);
      embla?.scrollTo(index + 1);
    }
  };

  const slideToPrev = (index: number) => {
    if (index === 0) return;
    setInitialSlide(DATA[index - 1].stories.length - 1);
    embla?.scrollTo(index - 1);
  };

  return (
    <Carousel
      w={"100%"}
      onSlideChange={(index) => {
        const url = `/stories/${DATA[index].username}/0`;
        replace(url);
      }}
      loop={false}
      getEmblaApi={setEmbla}
      align="center"
      slideGap={"md"}
      slideSize="auto"
      withControls={false}
    >
      {DATA.map((user, index) => (
        <Carousel.Slide key={index}>
          {user.username === username ? (
            <Stories
              username={user.username}
              stories={user.stories}
              initialSlide={initialSlide}
              slideToNext={() => slideToNext(index)}
              slideToPrev={() => slideToPrev(index)}
            />
          ) : (
            <StoryPreview
              onClick={() => embla?.scrollTo(index)}
              preview={user.stories[0]}
            />
          )}
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
