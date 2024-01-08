"use client";
import { Container, MantineProvider } from "@mantine/core";
import { ColorSchemeScript } from "@mantine/core";
import { useSelectedLayoutSegment } from "next/navigation";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          {children}
          {segment !== "stories" && modal}
        </MantineProvider>
      </body>
    </html>
  );
}
